import React from "react";

const Moi: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Qui suis-je ?</h1>
      <p className="text-lg text-black-700 max-w-2xl">
        Bonjour, moi, c’est Amine. Je suis étudiant en développement web en
        troisième année de BUT Métiers du Multimédia et de l’Internet.
        J’apprécie le développement front-end, mais je commence à vraiment
        prendre goût au back-end. Curieux, patient et sociable, j’aime apprendre
        et échanger avec les autres. Dans mon portfolio, tu trouveras des
        projets sur lesquels j’ai aimé travailler. D’autres idées viendront
        bientôt s’y ajouter pour l’enrichir encore davantage. Si tu veux en
        savoir plus sur moi, n'hésite pas à jeter un coup d'œil sur mon cv.
      </p>
      <a
        href={import.meta.env.BASE_URL + "CV.pdf"}
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
