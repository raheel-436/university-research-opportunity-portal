import OpportunityForm from "../components/OpportunityForm"

function CreateOpportunity() {
  return (
    <div className="min-h-screen bg-[#0f1714] text-[#eaf1ed]">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <h1 className="font-serif text-4xl">
          Create Opportunity
        </h1>

        <p className="mt-3 text-[#9aaaa3]">
          Add a new research opportunity for students.
        </p>
        <div className="mt-8 rounded-[24px] border-2 border-[#6fd0a8] bg-[#16211d] p-6 shadow-[0_0_25px_rgba(111,208,168,0.12)] sm:p-8">
          <OpportunityForm />
        </div>
      </div>
    </div>
  )
}

export default CreateOpportunity