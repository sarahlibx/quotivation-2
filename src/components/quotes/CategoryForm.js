import React from "react";

function CategoryForm({ categories, category, handleCategoryChange }) {
  return (
    <form
      className='category-filter'
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <fieldset>
        <legend>Filter Quotes</legend>
        <label htmlFor='category'>Category:</label>
        <select id='category' name='category' value={category} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </fieldset>
    </form>
  );
}

export default CategoryForm;
