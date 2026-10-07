import { useState } from "react"
import { motion } from "motion/react"

const inputClass =
  "w-full rounded-xl border border-[#26352f] bg-[#0f1714] px-4 py-3 text-sm text-[#eaf1ed] outline-none transition focus:border-[#6fd0a8]"

const labelClass = "mb-1.5 block text-xs text-[#9aaaa3]"

const EditOpportunityModal = ({ opportunity, onSave, onClose }) => {
  const [form, setForm] = useState({
    research_title: opportunity.research_title ?? "",
    research_area: opportunity.research_area ?? "",
    research_description: opportunity.research_description ?? "",
    faculty_name: opportunity.faculty_name ?? "",
    department: opportunity.department ?? "",
    available_positions: opportunity.available_positions ?? 1,
    application_deadline: String(opportunity.application_deadline ?? "").slice(0, 10),
    required_skills: opportunity.required_skills ?? "",
    status: opportunity.status ?? "Open",
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError("")

    try {
      await onSave(opportunity.id, {
        ...form,
        available_positions: Number(form.available_positions),
      })
    } catch (err) {
      console.error(err)
      setError("Could not save your changes. Please try again.")
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-60 grid place-items-center p-4">
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      {/* Modal */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[20px] border border-[#26352f] bg-[#16211d] p-7 text-[#eaf1ed] shadow-lg"
      >
        <h2 className="font-serif text-2xl">Edit opportunity</h2>

        <div className="mt-6 space-y-4">
          <div>
            <label className={labelClass}>Research title</label>
            <input
              name="research_title"
              value={form.research_title}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Research area</label>
            <input
              name="research_area"
              value={form.research_area}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Description</label>
            <textarea
              name="research_description"
              value={form.research_description}
              onChange={handleChange}
              rows={4}
              required
              className={inputClass}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Faculty name</label>
              <input
                name="faculty_name"
                value={form.faculty_name}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Department</label>
              <input
                name="department"
                value={form.department}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Available positions</label>
              <input
                type="number"
                min="1"
                name="available_positions"
                value={form.available_positions}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Application deadline</label>
              <input
                type="date"
                name="application_deadline"
                value={form.application_deadline}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Required skills (comma separated)</label>
            <input
              name="required_skills"
              value={form.required_skills}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        {error && <p className="mt-4 text-sm text-red-300">{error}</p>}

        <div className="mt-7 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl border border-[#26352f] px-5 py-3 font-semibold text-[#9aaaa3] transition hover:text-[#eaf1ed]"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={saving}
            className="flex-1 rounded-xl bg-[#6fd0a8] px-5 py-3 font-semibold text-[#0b1511] transition hover:opacity-90 disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save changes"}
          </button>
        </div>
      </motion.form>
    </div>
  )
}

export default EditOpportunityModal
