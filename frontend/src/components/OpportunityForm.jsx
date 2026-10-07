import { useState } from "react"
import { createOpportunity } from "../services/api"
function OpportunityForm({ onCreated }) {
    const [formData, setFormData] = useState({
        research_title: "",
        research_description: "",
        research_area: "",
        faculty_name: "",
        department: "",
        required_skills: "",
        available_positions: "",
        application_deadline: "",
    })

    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const validateForm = () => {
        if (!formData.research_title.trim()) {
            return "Research title is required."
        }

        if (!formData.research_description.trim()) {
            return "Research description is required."
        }

        if (!formData.research_area.trim()) {
            return "Research area is required."
        }

        if (!formData.faculty_name.trim()) {
            return "Faculty member is required."
        }

        if (!formData.department.trim()) {
            return "Department is required."
        }

        if (!formData.required_skills.trim()) {
            return "Required skills are required."
        }

        if (!formData.available_positions) {
            return "Available positions are required."
        }

        if (!formData.application_deadline) {
            return "Application deadline is required."
        }

        return ""
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const validationError = validateForm()

        if (validationError) {
            setErrorMessage(validationError)
            setSuccessMessage("")
            return
        }

        try {
            const newOpportunity = {
            ...formData,
            available_positions: Number(formData.available_positions),
            status: "Open",
            }

            const result = await createOpportunity(newOpportunity)

            console.log("Opportunity created:", result)

            setSuccessMessage("Opportunity created successfully!")
            setErrorMessage("")

            setTimeout(() => {
            onCreated()
            }, 2500)

        } catch (error) {
            console.error(error)

            setErrorMessage("Failed to create opportunity. Please try again.")
            setSuccessMessage("")
        }
    }

  return (
    <>
    
    <form  onSubmit={handleSubmit} 
        className="mt-8 space-y-6"
    >
      {/* Research Title */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Research Title
        </label>

        <input
          type="text"
          placeholder="Enter research title"
          name="research_title"
          value={formData.research_title}
          onChange={handleChange}
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
          name="research_description"
          value={formData.research_description}
          onChange={handleChange}
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
          name="research_area"
          value={formData.research_area}
          onChange={handleChange}
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
          name="faculty_name"
          value={formData.faculty_name}
          onChange={handleChange}
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
          name="department"
          value={formData.department}
          onChange={handleChange}
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
          name="required_skills"
          value={formData.required_skills}
          onChange={handleChange}
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
            name="available_positions"
            value={formData.available_positions}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#26352f] bg-[#16211d] px-4 py-3 text-[#eaf1ed] outline-none placeholder:text-[#9aaaa3] focus:border-[#6fd0a8]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Application Deadline
          </label>

          <input
            type="date"
            name="application_deadline"
            value={formData.application_deadline}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#26352f] bg-[#16211d] px-4 py-3 text-[#eaf1ed] outline-none focus:border-[#6fd0a8]"
          />
        </div>
      </div>

       {successMessage && (
        <div className="mb-6 rounded-xl border border-[#6fd0a8] bg-[#1d3a30] px-4 py-3 text-sm text-[#6fd0a8]">
            ✓ {successMessage}
        </div>
        )}

        {errorMessage && (
        <div className="mb-6 rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-300">
            {errorMessage}
        </div>
        )}

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-xl bg-[#6fd0a8] px-5 py-3 font-semibold text-[#0b1511] transition hover:brightness-110"
      >
        Create Opportunity
      </button>
    </form>
    </>
  )
}

export default OpportunityForm