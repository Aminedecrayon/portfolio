import React, { useEffect, useState } from "react";

const MouseTrail: React.FC = () => {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>(
    []
  );

  useEffect(() => {
    let idCounter = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const newPoint = { x: event.clientX, y: event.clientY, id: idCounter++ };

      setTrail((prevTrail) => [...prevTrail, newPoint]);

      // Supprimer chaque point après 300 ms (ajuste cette valeur pour plus ou moins de persistance)
      setTimeout(() => {
        setTrail((prevTrail) => prevTrail.filter((p) => p.id !== newPoint.id));
      }, 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {trail.map((point) => (
        <div
          key={point.id}
          className="mouse-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: 0.5, // Ajuste l'opacité pour un effet de fondu
          }}
        />
      ))}
    </>
  );
};

export default MouseTrail;
