import Navbar from "../components/navbar"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
const Home = () => {
   return (
    <div className="min-h-screen bg-[#0f1714]">

      <Navbar />
      <Hero/>
      <Stats/>
    </div>
  )
}

export default Home