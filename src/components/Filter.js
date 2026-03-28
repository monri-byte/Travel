import React from 'react';

function Filter({ countries, selectedCountry, onCountryChange }) {
  function handleChange(event) {
    const newValue = event.target.value;
    onCountryChange(newValue);
  }
  function createOption(country) {
    return (
      <option key={country} value={country}>
        {country}
      </option>
    );
  }
  const options = [];
  for (let i = 0; i < countries.length; i++) {
    options.push(createOption(countries[i]));
  }
  return (
    <div className="filter-section">
      <label htmlFor="country-filter">Фильтр по стране:</label>
      <select
        id="country-filter"
        value={selectedCountry}
        onChange={handleChange}
        className="filter-select"
      >
        {options}
      </select>
    </div>
  );
}

export default Filter;