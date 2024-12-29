import React from 'react';

export default function SearchResults({ filteredCats }) {
  return (
    <div className="search-results-container mt-3">
      <div className="row g-4">
        {filteredCats.map((cat, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
            <div className="cat-card custom-card">
              <div className="cat-image-container">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="cat-image"
                />
              </div>
              <div className="cat-details">
                <h4 className="cat-name">{cat.name}</h4>
                <p className="cat-age">Age: {cat.age}</p>
                <p className="cat-breed">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
