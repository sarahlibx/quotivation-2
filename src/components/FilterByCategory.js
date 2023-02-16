import React from "react";

function FilterByCategory({ categories, category, setCategory }) {
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
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
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
