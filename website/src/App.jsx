import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Navigation from "./components/Navigation";
import Hero from "./components/hero";
import Services from "./components/Services";
import About from "./components/about";
import SocialLinks from "./components/SocialLinks";
import Courses from "./components/Courses";
import Books from "./components/books";
import LearnersTrust from "./components/Achievements";
import Contact from "./components/contact";
import Footer from "./components/footer";
import CloudDevOpsConsulting from "./components/Consulting";
import DMI from "./components/dmi";

function App() {
  return (
    <Router>
      <div className="font-jakarta min-h-screen bg-[#F2F6FC]">

        {/* Global Header */}
        <Header />

        <main>
          {/* Sticky Navigation under header */}
          <Navigation />

          <Routes>

            {/* HOME PAGE */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <About />
                 
                  <Courses />
                   
                  <Books />
                 <LearnersTrust />
                  <Contact />

                   {/* <SocialLinks /> */}
                </>
              }
            />

            {/* DMI PAGE */}
            <Route path="/dmi" element={<DMI />} />

            {/* OPTIONAL FUTURE ROUTES */}
            <Route path="/consulting" element={<CloudDevOpsConsulting />} />
            {/* Add others if needed */}

          </Routes>

          {/* Global Footer */}
          <Footer />
        </main>

      </div>
    </Router>
  );
}

export default App;
