import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      id="main-content"
      className="flex flex-col items-center justify-center h-screen text-center relative bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('./images/NEUMORPHIC_CIRCLES_BACKGROUND.svg')",
      }}
    >
      <h1 className="font-display text-5xl text-black">
        Salut moi c'est Amine Lakrad, Bienvenue dans mon portfolio
      </h1>

      <p className="font-sans text-lg text-black">
        Développeur Web Front-End | Étudiant en BUT MMI
      </p>

      {/* Ajout des liens vers les pages Moi et Projet */}
      <div className="mt-8 space-x-4">
        <Link
          to="/moi"
          className="px-6 py-2 bg-[#F48FB1] text-white rounded-lg hover:bg-[#F06292] transition"
        >
          Qui suis-je
        </Link>
        <Link
          to="/projet"
          className="px-6 py-2 bg-[#F48FB1] text-white rounded-lg hover:bg-[#F06292] transition"
        >
          Mes projets
        </Link>
      </div>
    </div>
  );
};

export default Home;
