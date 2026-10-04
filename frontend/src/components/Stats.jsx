import {motion} from "motion/react"
const Stats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mx-auto mt-2 grid max-w-6xl grid-cols-3 gap-3 px-5 pb-10"
    >

      <div>
        <div className="font-serif text-3xl text-[#eaf1ed]">
          42
        </div>

        <div className="mt-1 text-xs text-[#9aaaa3]">
          Open positions
        </div>
      </div>

      <div>
        <div className="font-serif text-3xl text-[#eaf1ed]">
          18
        </div>

        <div className="mt-1 text-xs text-[#9aaaa3]">
          Faculty mentors
        </div>
      </div>

      <div>
        <div className="font-serif text-3xl text-[#eaf1ed]">
          9
        </div>

        <div className="mt-1 text-xs text-[#9aaaa3]">
          Departments
        </div>
      </div>

    </motion.div>
  )
}

export default Stats