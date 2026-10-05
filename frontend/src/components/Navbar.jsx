function Navbar({ onCreateOpportunity }) {
     return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-5 pt-6">
      
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#6fd0a8] font-serif text-lg text-[#0b1511]">
          R
        </div>

        <span className="font-serif text-xl text-[#eaf1ed]">
          Research Portal
        </span>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="hidden text-sm font-medium text-[#eaf1ed] sm:block"
        >
          Opportunities
        </a>

        <button
          onClick={onCreateOpportunity}
          className="rounded-xl bg-[#6fd0a8] px-4 py-2.5 text-sm font-semibold text-[#0b1511] transition hover:brightness-110"
        >
          + Create Opportunity
        </button>
      </div>
    </header>
  )
}

export default Navbar