import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center bg-light p-3">
        <h1>
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us-page">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us-page">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donate">
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="bg-light p-3">
        <p>© Copyright 2024 Purrfect Adoption</p>
      </footer>
    </div>
  );
};

export default BaseLayout;