import '../views/AvailableCats.css';
import { useEffect, useState } from 'react';

export default function AvailableCats() {
  const [cats, setCats] = useState([]);  
  const [filteredCats, setFilteredCats] = useState([]);  
  const [breedFilter, setBreedFilter] = useState('');
  const [nameSearch, setNameSearch] = useState('');

  const availableCats = [
    { breed: 'Sphynx', name: 'Cutie', age: '1' },
    { breed: 'Birman', name: 'Blueberry', age: '4' },
    { breed: 'Persian', name: 'Puchu', age: '5' },
    { breed: 'Abyssinian', name: 'Simon', age: '3' },
    { breed: 'Bengal', name: 'Lalu', age: '1' },
    { breed: 'Peterbald', name: 'Oreo', age: '2' },
  ];

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = responses.map((response, index) => ({
          ...availableCats[index],  
          image: response[0].url     
        }));

        setCats(catsWithImages);  
        setFilteredCats(catsWithImages);  

      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();  
  }, []);  

  const handleFilterChange = () => {
    let filtered = cats;

    if (breedFilter) {
      filtered = filtered.filter((cat) => cat.breed.toLowerCase() === breedFilter.toLowerCase());
    }

    if (nameSearch) {
      filtered = filtered.filter((cat) => cat.name.toLowerCase().includes(nameSearch.toLowerCase()));
    }

    setFilteredCats(filtered);  
  };
  useEffect(() => {
    handleFilterChange();  
  }, [breedFilter, nameSearch, cats]); 

  return (
    <section className="available-cats-container">
      <h2>Available Cats</h2>

      <div className="filters">
        <select 
          value={breedFilter} 
          onChange={(e) => setBreedFilter(e.target.value)} 
          className="select-breed"
        >
          <option value="">Select Breed</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Peterbald">Peterbald</option>
          <option value="Birman">Birman</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
        </select>
        <input
          type="text"
          placeholder="Search by name"
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
          className="search-by-name"
        />
      </div>

      <div className="cat-cards">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img
              src={cat.image}
              alt={cat.name}
              className="cat-image"
            />
            <div className="cat-info">
              <h3 className="cat-name">{cat.name}</h3>
              <p className="cat-age">Age: {cat.age}</p>
              <p className="cat-breed">Breed: {cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
