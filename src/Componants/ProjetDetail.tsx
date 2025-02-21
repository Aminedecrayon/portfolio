import React from "react";
import { useParams, Link } from "react-router-dom"; // Import de Link pour la navigation
import projet1 from "../images/projet1.jpg"; // Exemple d'image
import group1 from "../images/Group 42.png";
import group3 from "../images/Group 3.png";
import group6 from "../images/Group 6.png";

// Exemple de données de projet
const projets = [
  {
    id: 1,
    titre: "Site de la SAESPCI",
    description:
      "Projet toujours en cours de développement. C'est un projet que je réalise pour des chercheurs ayant énormément besoin d'un site pour leur association de gestion de contrat. L'objectif était d'expliquer au mieux le rôle de leur association afin d'encourager les jeunes chercheurs à y adhérer.La V2, actuellement en préparation, permettra aux chercheurs de créer un compte utilisateur et de consulter leurs informations personnelles.",
    image: group6,
    technologie: "Wordpress",
    duree: "1 mois",
    lien: "https://blog.espci.fr/saespci/",
  },
  {
    id: 2,
    titre: "Datavisualisation",
    description:
      "Ce projet a été ma première expérience avec les API. L’objectif était de créer un site de datavisualisation en récupérant des données d’une API et en les représentant de manière graphique avec Chart.js. J’ai choisi de travailler sur les marchés financiers.",
    image: group1,
    technologie: "HTML, ChartJs",
    duree: "2 semaines",
    lien: "http://amine.lakrad.mmi-velizy.fr/MMI2/datavisu/",
  },
  {
    id: 3,
    titre: "Portail SACEM",
    description:
      "Lors de mon premier stage à la SACEM, j’ai eu la chance de participer au maintien du site portail au sein d’une superbe équipe qui m’a permis de monter en compétences. En tant que développeur front-end, ma mission était d’intégrer les différentes améliorations au site. Une expérience très formatrice !",
    image: group3,
    technologie: "Angular, Bootstrap",
    duree: "1 mois",
    lien: "https://clients.sacem.fr/",
  },
];

const ProjetDetail = () => {
  const { id } = useParams<{ id: string }>(); // Récupère l'id du projet dans l'URL
  const projet = projets.find((p) => p.id.toString() === id);

  if (!projet) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="min-h-screen flex justify-center items-start py-4">
      {/* Ajout de py-4 pour donner de l'espace */}
      <div className="w-full max-w-3xl px-6 py-8 rounded-lg overflow-y-auto">
        {/* Ajout de overflow-y-auto pour activer le défilement */}
        {/* Bouton Retour à la page Projets */}
        <div className="text-center mb-6">
          <Link
            to="/projet" // Redirection vers la page des projets
            className="back-to-projects inline-block text-white py-2 px-6 rounded-lg"
          >
            Retour aux Projets
          </Link>
        </div>
        {/* Image du projet */}
        <div className="flex justify-center mb-6">
          <img
            src={projet.image}
            alt={projet.titre}
            className="w-full h-72 object-cover rounded-lg"
          />
        </div>
        {/* Informations du projet */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{projet.titre}</h1>
          <p className="text-lg text-gray-700 mb-4">{projet.description}</p>
          <p className="text-md text-gray-600 mb-2">
            <strong>Technologies:</strong> {projet.technologie}
          </p>
          <p className="text-md text-gray-600 mb-2">
            <strong>Durée:</strong> {projet.duree}
          </p>
          <a
            href={projet.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-[#F48FB1] text-white py-2 px-6 rounded-lg hover:bg-[#F06292] transition"
          >
            Voir le projet
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjetDetail;
