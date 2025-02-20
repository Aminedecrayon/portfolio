import React from "react";

const Moi: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Qui suis-je ?</h1>
      <p className="text-lg text-gray-700 max-w-2xl">
        Je suis [Ton Nom], un(e) passionné(e) de [Ton Domaine]. Toujours
        curieux(se) et motivé(e), j'aime apprendre et relever de nouveaux défis.
        Bienvenue sur mon portfolio !
      </p>
      <a
        href="src/images/CV.pdf" // Remplace par le bon chemin de ton CV
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-4 py-2 bg-[#F48FB1] text-white font-semibold rounded-lg shadow-md hover:bg-[#F06292] transition"
      >
        Télécharger mon CV
      </a>
    </div>
  );
};

export default Moi;
