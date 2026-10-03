from pydantic import BaseModel
from datetime import date


class OpportunityBase(BaseModel):
    research_title: str
    research_description: str
    research_area: str
    faculty_name: str
    department: str
    required_skills: str
    available_positions: int
    application_deadline: date
    status: str = "Open"


class OpportunityCreate(OpportunityBase):
    pass


class OpportunityResponse(OpportunityBase):
    id: int

    class Config:
        from_attributes = True
