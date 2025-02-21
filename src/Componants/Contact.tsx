import React from "react";
import { Mail, Phone } from "lucide-react"; // Import des icônes pour email et téléphone
import linkedin from "../images/icons8-linkedin.png";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>{" "}
      {/* Espacement sous le titre */}
      <div className="space-y-4 text-lg flex flex-col items-center">
        {" "}
        {/* Centrage des éléments */}
        <p className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-gray-600" />
          <strong>lakradamine86@gmail.com</strong>
        </p>
        <p className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-gray-600" />
          <strong>06 95 14 70 39</strong> {/* Remplace par ton vrai numéro */}
        </p>
        {/* Icône LinkedIn avec image */}
        <a
          href="https://www.linkedin.com/in/amine-lakrad"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <img src={linkedin} alt="LinkedIn" className="w-15 h-15" />
        </a>
        <p className="text-gray-700 flex items-center gap-2">
          📍 Rueil-Malmaison, France
        </p>
      </div>
    </div>
  );
};

export default Contact;
