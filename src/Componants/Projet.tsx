import React, { useState } from "react";
import { Link } from "react-router-dom";
import projet1 from "../images/projet1.jpg";
import group1 from "../images/Group 1.png";

const projets = [
  {
    id: 1,
    titre: "Projet 1",
    description: "Description brève du projet 1.",
    image: projet1, // Utilisation de l'import
  },
  {
    id: 2,
    titre: "Projet 2",
    description: "Description brève du projet 2.",
    image: "/images/faded!;jpg",
  },
  {
    id: 3,
    titre: "Projet 3",
    description: "Description brève du projet 3.",
    image: group1,
  },
];

const Projet = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <div>
      {/* Image qui apparaît à gauche */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 transition-opacity duration-500">
        {hoveredImage && (
          <img
            src={hoveredImage}
            alt="Aperçu projet"
            className="w-128 h-72 object-cover rounded-lg shadow-lg opacity-100 transition-transform transform scale-110"
          />
        )}
      </div>

      {/* Conteneur des projets aligné à droite avec marge en haut */}
      <div className="ml-auto w-3/5 pr-10 max-h-screen overflow-y-auto ">
        <h1 className="text-3xl font-bold text-center mb-8 ml-10 ">
          Mes Projets
        </h1>
        {/* Flexbox pour empiler les projets et les aligner à droite */}
        <div className="flex flex-col items-end gap-6">
          {projets.map((projet) => (
            <Link
              to={`/projet/${projet.id}`}
              key={projet.id}
              className="group block bg-[#F48FB1] text-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 w-3/5 mb-6 hover:bg-[#F06292]"
              onMouseEnter={() => setHoveredImage(projet.image)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={projet.image}
                alt={projet.titre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{projet.titre}</h2>
                <p className="text-gray-600">{projet.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projet;
