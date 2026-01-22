import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Studio from "./Studio";
// import Demo from "./demo1";
import ServiceCard from "./ServiceCard";
import CustomerOffer from "./Customeroffer";
import Video from "./video";
import LeaderPage from "./LeaderPage";
import Blog from './blog'
import Footer from './footer'
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bridal from "./pages/Bridal";
import SkinCare from "./pages/SkinCare";
import HairCare from "./pages/HairCare";
import Mehndi from "./pages/Mehndi"
import Wax from "./pages/Wax";

// function App() {

//   return (
//     <>

    
//      <Navbar/>
//       <Hero />
//       <Services />
//       <Studio />
//       <ServiceCard />
//       <Video />
//       <CustomerOffer />
//       <LeaderPage/>
//       <Blog/> 
//       <Footer/>  
     
      
//     </>
//   );
// }
// export default App;


function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Studio />
              <ServiceCard />
              <Video />
              <CustomerOffer />
              <LeaderPage />
              <Blog />
              <Footer />
            </>
          }
        />

        {/* Bridal Page */}
        <Route path="/bridal" element={<Bridal/>} />
        <Route path="/skinCare" element={<SkinCare/>} />
        <Route path="/hairCare" element={<HairCare/>} />
        <Route path="/mehndi" element={<Mehndi/>} />
        <Route path="/wax" element={<Wax/>} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;