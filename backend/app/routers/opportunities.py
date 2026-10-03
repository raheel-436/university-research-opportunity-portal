from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session

from ..database import SessionLocal
from .. import models, schemas

router = APIRouter(prefix="/api/opportunities", tags=["Opportunities"])


def get_db():  # create db session for each request
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


@router.post(
    "", response_model=schemas.OpportunityResponse, status_code=status.HTTP_201_CREATED
)
def create_opportunity(
    opportunity: schemas.OpportunityCreate, db: Session = Depends(get_db)
):
    new_opportunity = models.ResearchOpportunity(
        **opportunity.model_dump()
    )  # validated Pydantic data and creates SQLAlchemy database object.
    db.add(new_opportunity)
    db.commit()
    db.refresh(new_opportunity)  # get newly generated id

    return new_opportunity


@router.get("", response_model=list[schemas.OpportunityResponse])
def get_opportunities(db: Session = Depends(get_db)):
    opportunities = db.query(
        models.ResearchOpportunity
    ).all()  # from research_opportunities tables, get all records

    return opportunities


@router.get("/{opportunity_id}", response_model=schemas.OpportunityResponse)
def get_opportunity(opportunity_id: int, db: Session = Depends(get_db)):
    opportunity = (
        db.query(models.ResearchOpportunity)
        .filter(models.ResearchOpportunity.id == opportunity_id)
        .first()
    )

    if not opportunity:
        raise HTTPException(status_code=404, detail="Opportunity not found")

    return opportunity


@router.put("/{opportunity_id}", response_model=schemas.OpportunityResponse)
def update_opportunity(
    opportunity_id: int,
    opportunity: schemas.OpportunityCreate,
    db: Session = Depends(get_db),
):
    existing_opportunity = (
        db.query(models.ResearchOpportunity)
        .filter(models.ResearchOpportunity.id == opportunity_id)
        .first()
    )

    if not existing_opportunity:
        raise HTTPException(status_code=404, detail="Opportunity not found")

    for key, value in opportunity.model_dump().items():
        setattr(existing_opportunity, key, value)

    db.commit()
    db.refresh(existing_opportunity)

    return existing_opportunity
