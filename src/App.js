import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './pages/header';
import Footer from './pages/footer'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Events from './pages/Events';
import Locations from './pages/locations';
import Hospitals from './pages/Hospitals';
import AboutMadhavanjiHospital from './pages/AboutMadhavanjiHospital';
import AboutFounder from './pages/AboutFounder';
import Karmanghat from './pages/Karmanghat';
// import medicalcamp from './pages/medicalcamp';
// import MedicalCampGallery from './pages/AboutFounder';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/events" element={<Events />}></Route>
          <Route path='/locations' element={<Locations />}></Route>
          <Route path='/hospitals' element={<Hospitals />}></Route>
          {/* <Route path='/medicalcamp' element={<medicalcamp />}><Route> */}
          <Route path='/hospitals/karmanghat' element={<Karmanghat />}>
          </Route>

          {/* <Route path="/about/founder" component={Founder} /> */}
          <Route exact path="/about" component={About} />
          <Route path="/about/aboutmadhavanjihospital" element={<AboutMadhavanjiHospital />} />
          <Route path="/about/founder" element={<AboutFounder />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
