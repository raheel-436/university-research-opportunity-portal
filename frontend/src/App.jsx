import { useState } from "react"
import Home from "./pages/home"
import CreateOpportunity from "./pages/CreateOpportunity"
function App() {
  const [currentPage,setCurrentPage] = useState("home")
  return (
    <>
     {currentPage === "home" && (
        <Home onCreateOpportunity={() => setCurrentPage("create")} />
      )}

      {currentPage === "create" && (
        <CreateOpportunity
        onBack={() => setCurrentPage("home")}
        />
      )}
    </>
  )
}

export default App