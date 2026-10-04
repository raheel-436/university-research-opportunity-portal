
const CategoryFilters = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            selectedCategory === category
              ? "border-[#6fd0a8] bg-[#6fd0a8] text-[#0b1511]"
              : "border-[#26352f] bg-[#16211d] text-[#eaf1ed] hover:border-[#6fd0a8]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilters