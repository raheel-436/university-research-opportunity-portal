from typing import Literal
from pydantic import BaseModel, Field
from datetime import date


class OpportunityBase(BaseModel):
    research_title: str
    research_description: str
    research_area: str
    faculty_name: str
    department: str
    required_skills: str
    available_positions: int = Field(gt=0)
    application_deadline: date
    status: Literal["Open", "Closed"] = "Open"


class OpportunityCreate(OpportunityBase):
    pass


class OpportunityResponse(OpportunityBase):
    id: int

    class Config:
        from_attributes = True
