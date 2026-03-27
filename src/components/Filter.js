import React from 'react';

function Filter({ countries, selectedCountry, onCountryChange }) {
  return (
    <div className="filter-section">
      <label htmlFor="country-filter">Фильтр по стране:</label>
      <select
        id="country-filter"
        value={selectedCountry}
        onChange={(e) => onCountryChange(e.target.value)}
        className="filter-select"
      >
        {countries.map(country => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;