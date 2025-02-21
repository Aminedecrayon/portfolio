import React, { useState } from "react";
import { Link } from "react-router-dom";
import projet1 from "../images/projet1.jpg";
import group1 from "../images/Group 42.png";
import group3 from "../images/Group 3.png";
import group6 from "../images/Group 6.png";

const projets = [
  {
    id: 1,
    titre: "SAESPCI",
    description: "Site Wordpress",
    image: group6,
  },
  {
    id: 2,
    titre: "Datavisualisation",
    description: "Site web pour suivre l'évolution des marchés financiers",
    image: group1,
  },
  {
    id: 3,
    titre: "Site portail de la SACEM",
    description: "Le portail client de la Sacem",
    image: group3,
  },
];

const Projet = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <div className="relative z-20">
      {/* Conteneur principal pour tout centrer */}
      <div className="relative flex flex-col lg:flex-row justify-center items-center lg:items-start min-h-screen z-10 bg-transparent">
        {/* Image à gauche sur grands écrans uniquement */}
        <div className="absolute lg:left-10 top-1/2 transform -translate-y-1/2 transition-opacity duration-500 hidden lg:block z-0">
          {hoveredImage && (
            <img
              src={hoveredImage}
              alt="Aperçu projet"
              className="w-128 h-72 object-cover rounded-lg shadow-lg opacity-100 transition-transform transform scale-110"
            />
          )}
        </div>

        {/* Conteneur des projets (centré et empilé sur petits écrans) */}
        <div className="ml-auto w-full lg:w-3/5 pr-10 max-h-screen overflow-y-auto z-10">
          <h1 className="text-3xl font-bold text-center mb-8 ml-10">
            Mes Projets
          </h1>

          {/* Flexbox pour empiler les projets sur petits écrans et les aligner à droite sur grands écrans */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            {projets.map((projet) => (
              <Link
                to={`/projet/${projet.id}`}
                key={projet.id}
                className="group block  text-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 w-full lg:w-3/5 mb-6 hover:bg-[#F06292]"
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
    </div>
  );
};

export default Projet;
