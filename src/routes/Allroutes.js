import { Routes, Route } from "react-router-dom";
import { Home, ContactUs, AboutUs, Blog, BlogDetails, HotelFilter, FlightFilter } from "../pages/index";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />
      <Route path="/hotel-filter" element={<HotelFilter />} />
      <Route path="/flight-filter" element={<FlightFilter />} />
    </Routes>
  );
}

export default Allroutes;