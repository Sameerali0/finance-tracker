function CategoryFilter({selectedCategory, setSelectedCategory}) {

    return(
        <div>
            <label>Filter by Category: </label>
            <select value={selectedCategory} onChange={(e)=> setSelectedCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Food">Food</option>
                <option value="Shopping">Shopping</option>
                <option value="Rent">Rent</option>
                <option value="Salary">Salary</option>
                <option value="Traveling">Traveling</option>
                <option value="Other">Other</option>
            </select>
        </div>
    )
    
}

export default CategoryFilter