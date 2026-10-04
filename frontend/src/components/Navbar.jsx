function Navbar() {
     return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-5 pt-6">
      
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#6fd0a8] font-serif text-lg text-[#0b1511]">
          R
        </div>

        <span className="font-serif text-xl text-[#eaf1ed]">
          ResearchHub
        </span>
      </div>

      {/* Navigation */}
      <nav className="hidden items-center gap-7 text-sm text-[#9aaaa3] sm:flex">
        <a
          href="#"
          className="font-medium text-[#eaf1ed]"
        >
          Opportunities
        </a>

        <a
          href="#"
          className="transition-colors hover:text-[#eaf1ed]"
        >
          Faculty
        </a>

        <a
          href="#"
          className="transition-colors hover:text-[#eaf1ed]"
        >
          My applications
        </a>
      </nav>

      {/* Sign in */}
      <button className="rounded-xl bg-[#6fd0a8] px-4 py-2.5 text-sm font-semibold text-[#0b1511] transition hover:brightness-110">
        Sign in
      </button>
    </header>
  )
}

export default Navbar