import { useEffect ,useState } from "react"

import Navbar from "../components/navbar"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import CategoryFilters from "../components/CategoryFilters"
import OpportunityGrid from "../components/OpportunityGrid"
import OpportunityDrawer from "../components/OpportunityDrawer"

import { getOpportunities } from "../services/api"


const Home = () => {
    const [opportunities, setOpportunities] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedOpportunity, setSelectedOpportunity] = useState(null)

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

    const categories = [
    "All",
    ...new Set(
      opportunities.map(
        (opportunity) => opportunity.research_area
      )
    ),
  ]

  const filteredOpportunities =
    selectedCategory === "All"
      ? opportunities
      : opportunities.filter(
          (opportunity) =>
            opportunity.research_area === selectedCategory
        )
   return (
    <div className="min-h-screen bg-[#0f1714]">

      <Navbar />
      <Hero/>
      <Stats/>

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
         />
    </div>
  )
}

export default Home