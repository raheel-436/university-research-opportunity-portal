import { AnimatePresence, motion } from "motion/react";


const OpportunityDrawer = ({opportunity,onClose,onEdit,onDelete }) => {
   return (
    <AnimatePresence>
      {opportunity && (
        <>
          {/* Background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/45"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.4,
              ease: [0.2, 0.7, 0.2, 1],
            }}
            className="fixed right-0 top-0 z-50 h-full w-full overflow-y-auto border-l border-[#26352f] bg-[#16211d] p-7 text-[#eaf1ed] sm:max-w-130"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="mb-6 text-sm text-[#9aaaa3] transition hover:text-[#eaf1ed]"
            >
              ← Back to opportunities
            </button>

            {/* Category + Status */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6fd0a8]">
                {opportunity.research_area}
              </span>

              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                  opportunity.status === "Closed"
                    ? "bg-[#202b27] text-[#8d9792]"
                    : "bg-[#1d3a30] text-[#6fd0a8]"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />

                {opportunity.status}
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-3 font-serif text-3xl leading-tight">
              {opportunity.research_title}
            </h2>

            {/* Description */}
            <p className="mt-4 leading-relaxed text-[#9aaaa3]">
              {opportunity.research_description}
            </p>

            {/* Information */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <InfoBox
                label="Faculty"
                value={opportunity.faculty_name}
              />

              <InfoBox
                label="Department"
                value={opportunity.department}
              />

              <InfoBox
                label="Positions"
                value={`${opportunity.available_positions} available`}
              />

              <InfoBox
                label="Deadline"
                value={formatDate(
                  opportunity.application_deadline
                )}
              />
            </div>

            {/* Skills */}
            <h4 className="mt-7 font-serif text-lg">
              Required skills
            </h4>

            <div className="mt-3 flex flex-wrap gap-2">
              {opportunity.required_skills
                .split(",")
                .map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#26352f] bg-[#16211d] px-3.5 py-2 text-sm text-[#eaf1ed]"
                  >
                    {skill.trim()}
                  </span>
                ))}
            </div>

            {/* Action */}
            <div className="my-4 flex gap-3">
              <button
                onClick={() => onEdit(opportunity)}
                className="flex-1 rounded-xl border border-[#6fd0a8] px-5 py-3 font-semibold text-[#6fd0a8] transition hover:bg-[#1d3a30]"
              >
                Edit Opportunity
              </button>
 
              <button
                onClick={() => onDelete(opportunity)}
                className="flex-1 rounded-xl border border-red-400/60 px-5 py-3 font-semibold text-red-300 transition hover:bg-red-500/10"
              >
                Delete Opportunity
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

function InfoBox({ label, value }) {
  return (
    <div className="rounded-2xl border border-[#26352f] bg-[#0f1714] p-4">
      <div className="text-xs text-[#9aaaa3]">
        {label}
      </div>

      <div className="mt-1 text-sm font-medium">
        {value}
      </div>
    </div>
  )
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export default OpportunityDrawer