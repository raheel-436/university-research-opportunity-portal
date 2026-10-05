import { useState } from "react"

import Navbar from "../components/navbar"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import CategoryFilters from "../components/CategoryFilters"
import OpportunityGrid from "../components/OpportunityGrid"

const sampleOpportunities = [
    {
    id: 1,
    research_title:
      "Indirect Prompt Injection in Multi-Agent LLM Pipelines",
    research_description:
      "Study how adversarial instructions propagate between cooperating LLM agents and design lightweight detection and containment layers for agentic workflows.",
    research_area: "AI Security",
    faculty_name: "Sir Khizar Mukhtiar",
    department: "Computer Science",
    required_skills: "Python, LLMs, Security",
    available_positions: 2,
    application_deadline: "2026-10-28",
    status: "Open",
  },

  {
    id: 2,
    research_title:
      "Transformer Models for Credit Card Fraud Detection",
    research_description:
      "Benchmark sequence models against gradient boosting on imbalanced transaction streams, with a focus on concept drift and explainability.",
    research_area: "Machine Learning",
    faculty_name: "Dr. Ali Sayyed",
    department: "Data Science",
    required_skills: "PyTorch, Pandas, Statistics",
    available_positions: 3,
    application_deadline: "2026-10-09",
    status: "Open",
  },

  {
    id: 3,
    research_title:
      "Low-Cost Soil Moisture Sensing with LoRa Networks",
    research_description:
      "Build and field-test a battery-efficient sensor mesh for smallholder farms in the Peshawar valley.",
    research_area: "IoT",
    faculty_name: "Sir Qasim Jan",
    department: "Electrical Engineering",
    required_skills: "Embedded C, LoRa, PCB design",
    available_positions: 1,
    application_deadline: "2026-11-15",
    status: "Open",
  },

  {
    id: 4,
    research_title:
      "Urdu Sentiment Analysis on Social Media",
    research_description:
      "Curate an annotated Urdu and Roman-Urdu corpus and fine-tune multilingual models for sentiment and sarcasm.",
    research_area: "NLP",
    faculty_name: "Dr. Maria Qureshi",
    department: "Computer Science",
    required_skills: "NLP, Hugging Face, Annotation",
    available_positions: 4,
    application_deadline: "2026-10-06",
    status: "Open",
  },

  {
    id: 5,
    research_title:
      "Post-Quantum Key Exchange on Constrained Devices",
    research_description:
      "Evaluate lattice-based key exchange schemes for memory-limited microcontrollers and report performance trade-offs.",
    research_area: "Cryptography",
    faculty_name: "Sir Shahzeb",
    department: "Computer Science",
    required_skills: "C++, Cryptography, Linear algebra",
    available_positions: 1,
    application_deadline: "2026-09-20",
    status: "Closed",
  },

  {
    id: 6,
    research_title:
      "Accessible Learning Interfaces for Visually Impaired Students",
    research_description:
      "Co-design and user-test screen-reader friendly study tools with students from partner schools.",
    research_area: "HCI",
    faculty_name: "Dr. Ayesha Noor",
    department: "Software Engineering",
    required_skills: "UX research, React, Accessibility",
    available_positions: 2,
    application_deadline: "2026-12-01",
    status: "Open",
  },
]

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const categories = [
    "All",
    ...new Set(
      sampleOpportunities.map(
        (opportunity) => opportunity.research_area
      )
    ),
  ]

  const filteredOpportunities =
    selectedCategory === "All"
      ? sampleOpportunities
      : sampleOpportunities.filter(
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
          onOpportunityClick={(opportunity) =>
            console.log("Selected:", opportunity)
          }
        />

        </main>

    </div>
  )
}

export default Home