function OpportunityForm() {
  return (
    <form className="mt-8 space-y-6">
      {/* Research Title */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Research Title
        </label>

        <input
          type="text"
          placeholder="Enter research title"
          className="w-full rounded-xl border border-[#26352f] bg-[#16211d] px-4 py-3 text-[#eaf1ed] outline-none placeholder:text-[#9aaaa3] focus:border-[#6fd0a8]"
        />
      </div>

      {/* Research Description */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Research Description
        </label>

        <textarea
          rows="5"
          placeholder="Describe the research opportunity"
          className="w-full resize-none rounded-xl border border-[#26352f] bg-[#16211d] px-4 py-3 text-[#eaf1ed] outline-none placeholder:text-[#9aaaa3] focus:border-[#6fd0a8]"
        />
      </div>

      {/* Research Area */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Research Area
        </label>

        <input
          type="text"
          placeholder="e.g. Artificial Intelligence"
          className="w-full rounded-xl border border-[#26352f] bg-[#16211d] px-4 py-3 text-[#eaf1ed] outline-none placeholder:text-[#9aaaa3] focus:border-[#6fd0a8]"
        />
      </div>

      {/* Faculty Name */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Faculty Member
        </label>

        <input
          type="text"
          placeholder="Enter faculty member's name"
          className="w-full rounded-xl border border-[#26352f] bg-[#16211d] px-4 py-3 text-[#eaf1ed] outline-none placeholder:text-[#9aaaa3] focus:border-[#6fd0a8]"
        />
      </div>

      {/* Department */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Department
        </label>

        <input
          type="text"
          placeholder="e.g. Computer Science"
          className="w-full rounded-xl border border-[#26352f] bg-[#16211d] px-4 py-3 text-[#eaf1ed] outline-none placeholder:text-[#9aaaa3] focus:border-[#6fd0a8]"
        />
      </div>

      {/* Required Skills */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Required Skills
        </label>

        <input
          type="text"
          placeholder="e.g. Python, Machine Learning"
          className="w-full rounded-xl border border-[#26352f] bg-[#16211d] px-4 py-3 text-[#eaf1ed] outline-none placeholder:text-[#9aaaa3] focus:border-[#6fd0a8]"
        />
      </div>

      {/* Positions + Deadline */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Available Positions
          </label>

          <input
            type="number"
            min="1"
            placeholder="e.g. 2"
            className="w-full rounded-xl border border-[#26352f] bg-[#16211d] px-4 py-3 text-[#eaf1ed] outline-none placeholder:text-[#9aaaa3] focus:border-[#6fd0a8]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Application Deadline
          </label>

          <input
            type="date"
            className="w-full rounded-xl border border-[#26352f] bg-[#16211d] px-4 py-3 text-[#eaf1ed] outline-none focus:border-[#6fd0a8]"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-xl bg-[#6fd0a8] px-5 py-3 font-semibold text-[#0b1511] transition hover:brightness-110"
      >
        Create Opportunity
      </button>
    </form>
  )
}

export default OpportunityForm