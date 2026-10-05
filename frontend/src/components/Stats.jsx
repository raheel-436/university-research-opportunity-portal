import {motion} from "motion/react"
const Stats = ({ opportunities }) => {
  const openPositions = opportunities
    .filter((opportunity) => opportunity.status === "Open")
    .reduce(
      (total, opportunity) =>
        total + opportunity.available_positions,
      0
    )

  const facultyCount = new Set(
    opportunities.map((opportunity) => opportunity.faculty_name)
  ).size

  const departmentCount = new Set(
    opportunities.map((opportunity) => opportunity.department)
  ).size
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mx-auto mt-2 grid max-w-6xl grid-cols-3 gap-3 px-5 pb-10"
    >

      <div>
        <div className="font-serif text-3xl text-[#eaf1ed]">
          {openPositions}
        </div>

        <div className="mt-1 text-xs text-[#9aaaa3]">
          Open positions
        </div>
      </div>

      <div>
        <div className="font-serif text-3xl text-[#eaf1ed]">
          {facultyCount}
        </div>

        <div className="mt-1 text-xs text-[#9aaaa3]">
          Faculty mentors
        </div>
      </div>

      <div>
        <div className="font-serif text-3xl text-[#eaf1ed]">
          {departmentCount}
        </div>

        <div className="mt-1 text-xs text-[#9aaaa3]">
          Departments
        </div>
      </div>

    </motion.div>
  )
}

export default Stats