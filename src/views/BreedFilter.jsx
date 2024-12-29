import React from 'react';

export default function BreedFilter({ breedFilter, setBreedFilter }) {
  return (
    <div className="filter">
      <select value={breedFilter} onChange={(e) => setBreedFilter(e.target.value)}>
        <option value="">Select Breed</option>
        <option value="Sphynx">Sphynx</option>
        <option value="Peterbald">Peterbald</option>
        <option value="Birman">Birman</option>
        <option value="Abyssinian">Abyssinian</option>
        <option value="Persian">Persian</option>
        <option value="Bengal">Bengal</option>
      </select>
    </div>
  );
}