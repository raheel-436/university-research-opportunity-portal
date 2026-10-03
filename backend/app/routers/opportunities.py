from fastapi import APIRouter, Depends, status
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
