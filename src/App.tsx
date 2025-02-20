import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import { Home as HomeIcon, Menu } from "lucide-react";
import Home from "./Componants/Home";
import Moi from "./Componants/Moi";
import Projet from "./Componants/Projet";
import Contact from "./Componants/Contact";
import MouseFollower from "./Componants/MouseFollower";
import MouseTrail from "./Componants/MouseTrail";
import "./App.css";
import Image1 from "./images/rb_24058.png";
import Image2 from "./images/9da325d1-192c-4b3b-b3b8-dcfb1b5ed35a-removebg-preview.png";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = document.getElementById("background-container");
    if (container) {
      const numberOfImages = 5;
      const images = [Image1, Image2];
      for (let i = 0; i < numberOfImages; i++) {
        const img = document.createElement("img");
        img.src = images[Math.floor(Math.random() * images.length)];
        img.alt = "Random background image";
        img.className = "background-image";
        img.style.left = `${Math.random() * 100}%`;
        img.style.top = `${Math.random() * 100}%`;
        img.style.transform = `rotate(${Math.random() * 360}deg) scaleX(${
          Math.random() > 0.5 ? -1 : 1
        })`;
        img.style.width = "150px";
        img.style.height = "auto";
        img.style.maxWidth = "100%";
        img.style.maxHeight = "100%";
        container.appendChild(img);
      }
    }

    // Simuler la progression
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setLoading(false);
          return 100;
        }
        return oldProgress + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <Router>
      <div className="relative w-full h-screen">
        <div id="background-container"></div>
        <ShowHomeButton />
        <HamburgerMenu />
        {/* Les composants MouseFollower et MouseTrail sont ici, et seront toujours affichés */}
        <MouseFollower /> {/* Ajout du suivi de la souris */}
        <MouseTrail /> {/* Ajout de la traînée de souris */}
        {/* Affichage du chargement ou des routes */}
        {loading ? (
          <div className="loading-screen">
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>
            <div className="progress-text">{progress}%</div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moi" element={<Moi />} />
            <Route path="/projet" element={<Projet />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

const ShowHomeButton = () => {
  const location = useLocation();
  if (location.pathname === "/") return null;
  return (
    <Link
      to="/"
      className="absolute top-4 left-4 p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition shadow-lg"
    >
      <HomeIcon className="w-6 h-6 text-gray-700" />
    </Link>
  );
};

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-4 right-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition shadow-lg"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg flex flex-col">
          <Link
            to="/moi"
            className="p-2 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Moi
          </Link>
          <Link
            to="/projet"
            className="p-2 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Projet
          </Link>
          <Link
            to="/contact"
            className="p-2 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default App;
