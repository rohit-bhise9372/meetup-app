import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";

function App() {
return ( <BrowserRouter> <Navbar />


  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/events/:eventId" element={<EventDetails />} />
  </Routes>

  <Footer />
</BrowserRouter>


);
}

export default App;
