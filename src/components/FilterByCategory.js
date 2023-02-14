import React from "react";

function FilterByCategory({ fetchQuotes, categories }) {
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
        <select
          id='category'
          name='category'
          onChange={(e) => {
            const category = e.target.value;
            fetchQuotes(category);
          }}
        >
          <optgroup label='Categories'>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </optgroup>
        </select>
      </fieldset>
    </form>
  );
}

export default FilterByCategory;
