import { motion } from "motion/react"
const Hero = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-8 pt-14">

      {/* Small heading */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm font-medium text-[#6fd0a8]"
      >
        Fall 2026 · Now accepting applications
      </motion.p>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-[#eaf1ed] sm:text-6xl"
      >
        Find research that{" "}
        <em className="text-[#6fd0a8]">
          needs you.
        </em>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-5 max-w-xl text-base leading-relaxed text-[#9aaaa3] sm:text-lg"
      >
        Browse open positions from faculty across every department,
        match them to your skills, and apply in minutes.
      </motion.p>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 flex max-w-2xl items-center gap-3 rounded-2xl border border-[#26352f] bg-[#16211d] p-2 pl-5 shadow-lg"
      >

        {/* Search icon */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="shrink-0 text-[#9aaaa3]"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>

        <input
          type="text"
          placeholder="Search by title, faculty, or skill..."
          className="w-full bg-transparent text-sm text-[#eaf1ed] outline-none placeholder:text-[#9aaaa3]"
        />

        <button className="hidden rounded-xl bg-[#6fd0a8] px-5 py-3 text-sm font-semibold text-[#0b1511] transition hover:brightness-110 sm:block">
          Search
        </button>

      </motion.div>
    </section>
  )
}

export default Hero