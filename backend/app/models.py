from sqlalchemy import Column, Integer, String, Text, Date
from .database import Base


class ResearchOpportunity(Base):
    __tablename__ = "research_opportunities"

    id = Column(Integer, primary_key=True, index=True)
    research_title = Column(String(255), nullable=False)
    research_description = Column(Text, nullable=False)
    research_area = Column(String(100), nullable=False)
    faculty_name = Column(String(150), nullable=False)
    department = Column(String(100), nullable=False)
    required_skills = Column(Text, nullable=False)
    available_positions = Column(Integer, nullable=False)
    application_deadline = Column(Date, nullable=False)
    status = Column(String(20), nullable=False, default="Open")
