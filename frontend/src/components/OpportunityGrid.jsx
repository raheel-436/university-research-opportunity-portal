import OpportunityCard from "./OpportunityCard";
const OpportunityGrid = ({ opportunities, onOpportunityClick}) => {
    if (opportunities.length === 0) {
    return (
      <p className="col-span-full py-16 text-center text-[#9aaaa3]">
        No opportunities match your search.
      </p>
    )
  }
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {opportunities.map((opportunity) => (
        <OpportunityCard
          key={opportunity.id}
          opportunity={opportunity}
          onClick={() => onOpportunityClick(opportunity)}
        />
      ))}
    </div>
  )
}

export default OpportunityGrid