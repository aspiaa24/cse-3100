import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Ctto', age: '2', breed: 'Persian' },
  { name: 'Mike', age: '2', breed: 'Bengal' },
  { name: 'Berry', age: '2', breed: 'Peterbald' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      <section className="text-center mt-4">
        <h1>Welcome to Purrfect Adoption</h1>
        <p>
          You can find the cutest cattos here. Ore babies are waiting for a sweet home.
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured Cats</h2>
        <div className="mt-2 row g-4">
          {cats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
                  <p className="mb-5">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}