import React from 'react';

export default function NameSearch({ nameSearch, setNameSearch }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by name"
        value={nameSearch}
        onChange={(e) => setNameSearch(e.target.value)}
      />
    </div>
  );
}