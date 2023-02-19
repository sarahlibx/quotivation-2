import React from "react";

function FilterByCategory({ categories, category, handleCategoryChange }) {
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
          <optgroup label='Categories'>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </optgroup>
        </select>
      </fieldset>
    </form>
  );
}

export default FilterByCategory;
