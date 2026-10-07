import { motion } from "motion/react"
const OpportunityCard = ({ opportunity, onClick }) => {
  const isClosed = opportunity.status === "Closed"

  const initials = opportunity.faculty_name
    .split(" ")
    .slice(-2)
    .map((name) => name[0])
    .join("")

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className="flex cursor-pointer flex-col rounded-[20px] border border-[#26352f] bg-[#16211d] p-6 shadow-lg transition-colors hover:border-[#6fd0a8]"
    >
      {/* Top row */}
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#6fd0a8]">
          {opportunity.research_area}
        </span>

        {/* Status */}
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
            isClosed
              ? "bg-[#202b27] text-[#8d9792]"
              : "bg-[#1d3a30] text-[#6fd0a8]"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />

          {isClosed ? "Closed" : "Open"}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-3 font-serif text-[22px] leading-snug text-[#eaf1ed]">
        {opportunity.research_title}
      </h3>

      {/* Description */}
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#9aaaa3]">
        {opportunity.research_description}
      </p>

      {/* Skills */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {opportunity.required_skills
          .split(",")
          .map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-[#26352f] bg-[#0f1714] px-2.5 py-1 text-xs text-[#9aaaa3]"
            >
              {skill.trim()}
            </span>
          ))}
      </div>

      {/* Bottom section */}
      <div className="mt-auto pt-5">
        <div className="flex items-center gap-3 border-t border-dashed border-[#26352f] pt-4">

          {/* Faculty avatar */}
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#1d3a30] text-xs font-semibold text-[#6fd0a8]">
            {initials}
          </div>

          {/* Faculty */}
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium text-[#eaf1ed]">
              {opportunity.faculty_name}
            </div>

            <div className="truncate text-xs text-[#9aaaa3]">
              {opportunity.department}
            </div>
          </div>

          {/* Positions */}
          <div className="text-right text-xs text-[#9aaaa3]">
            <div>
              {opportunity.available_positions}{" "}
              {opportunity.available_positions === 1
                ? "position"
                : "positions"}
            </div>

            <div>
              {isClosed
                ? "Ended"
                : `Due ${new Date(
                    opportunity.application_deadline
                  ).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}`}
            </div>
          </div>

          {/* Arrow */}
          <div className="grid h-9.5 w-9.5 shrink-0 place-items-center rounded-full border border-[#26352f] text-[#eaf1ed] transition hover:bg-[#6fd0a8] hover:text-[#0b1511]">
            →
          </div>

        </div>
      </div>
    </motion.article>
  )
}

export default OpportunityCard