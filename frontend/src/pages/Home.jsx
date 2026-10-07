import { useEffect ,useState } from "react"
import { AnimatePresence } from "motion/react"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import CategoryFilters from "../components/CategoryFilters"
import OpportunityGrid from "../components/OpportunityGrid"
import OpportunityDrawer from "../components/OpportunityDrawer"
import EditOpportunityModal from "../components/EditOpportunityModal"
import ConfirmDialog from "../components/ConfirmDialog"

import {
  getOpportunities,
  updateOpportunity,
  deleteOpportunity,
} from "../services/api"


const Home = ({ onCreateOpportunity }) => {
    const [opportunities, setOpportunities] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedOpportunity, setSelectedOpportunity] = useState(null)
    const [editingOpportunity, setEditingOpportunity] = useState(null)
    const [deletingOpportunity, setDeletingOpportunity] = useState(null)
    const [isDeleting, setIsDeleting] = useState(false)
    const [deleteError, setDeleteError] = useState("")
    const [searchTerm, setSearchTerm] = useState("")


    useEffect(() => {
    async function loadOpportunities() {
      try {
        const data = await getOpportunities()
        setOpportunities(data)
      } catch (error) {
        console.error(error)
      }
      } 

      loadOpportunities()
    }, [])


    const handleDelete = (opportunity) => {
      setDeleteError("")
      setDeletingOpportunity(opportunity)
    }

    const cancelDelete = () => {
      if (!isDeleting) setDeletingOpportunity(null)
    }


    const confirmDelete = async () => {
      setIsDeleting(true)
      setDeleteError("")

      try {
        await deleteOpportunity(deletingOpportunity.id)
        setOpportunities((prev) =>
          prev.filter((item) => item.id !== deletingOpportunity.id)
        )
        setSelectedOpportunity(null)
        setDeletingOpportunity(null)
      } catch (error) {
        console.error(error)
        setDeleteError("Could not delete the opportunity. Please try again.")
      } finally {
        setIsDeleting(false)
      }
    }

  
    const handleSave = async (id, values) => {
      const updated = await updateOpportunity(id, values)

      setOpportunities((prev) =>
        prev.map((item) => (item.id === id ? updated : item))
      )
      setSelectedOpportunity(updated)
      setEditingOpportunity(null)
    }

    const categories = [
    "All",
    ...new Set(
      opportunities.map(
        (opportunity) => opportunity.research_area
      )
    ),
  ]

  const filteredOpportunities = opportunities.filter((opportunity) => {
  const matchesCategory =
    selectedCategory === "All" ||
    opportunity.research_area === selectedCategory

  const search = searchTerm.toLowerCase()

  const matchesSearch =
    opportunity.research_title.toLowerCase().includes(search) ||
    opportunity.faculty_name.toLowerCase().includes(search) ||
    opportunity.required_skills.toLowerCase().includes(search)

  return matchesCategory && matchesSearch
})


   return (
    <div className="min-h-screen bg-[#0f1714]">

      <Navbar
        onCreateOpportunity={onCreateOpportunity}
      />
      <Hero
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <Stats
        opportunities={opportunities}
      />

        <main className="mx-auto max-w-6xl px-5 pb-20">
        {/* Filters */}
        <div className="py-4">
          <CategoryFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

         {/* Count + sorting */}
        <div className="flex items-center justify-between pb-4 text-sm text-[#9aaaa3]">
          <span>
            {filteredOpportunities.length}{" "}
            {filteredOpportunities.length === 1
              ? "opportunity"
              : "opportunities"}
          </span>

          <span>Sorted by deadline</span>
        </div>

        {/* Cards */}
        <OpportunityGrid
           opportunities={filteredOpportunities}
           onOpportunityClick={setSelectedOpportunity}
        />

        </main>
         <OpportunityDrawer
          opportunity={selectedOpportunity}
          onClose={() => setSelectedOpportunity(null)}
          onEdit={setEditingOpportunity}
          onDelete={handleDelete}
         />

         {editingOpportunity && (
           <EditOpportunityModal
             key={editingOpportunity.id}
             opportunity={editingOpportunity}
             onSave={handleSave}
             onClose={() => setEditingOpportunity(null)}
           />
         )}

         <AnimatePresence>
           {deletingOpportunity && (
             <ConfirmDialog
               title="Delete this opportunity?"
               message={`"${deletingOpportunity.research_title}" will be permanently removed. This can't be undone.`}
               confirmLabel="Delete opportunity"
               loading={isDeleting}
               error={deleteError}
               onConfirm={confirmDelete}
               onCancel={cancelDelete}
             />
           )}
         </AnimatePresence>
    </div>
  )
}

export default Home