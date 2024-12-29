import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import ContactUs from './views/ContactUs';
import AboutUs from './views/AboutUs';
import Donate from './views/Donate';
function App() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route path={'/'} element={<Home />} />
        <Route path={'/available-cats'} element={<AvailableCats />} />
        <Route path={'/contact-us-page'} element={<ContactUs/>} />
        <Route path={'/about-us-page'} element={<AboutUs/>} />
        <Route path={'/donate'} element={<Donate/>} />
      </Route>
    </Routes>
  );
}

export default App;