import React, { useEffect, useState } from "react";

const MouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setIsMouseMoving(true);
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => setIsMouseMoving(false), 100);
    };

    let mouseTimeout: ReturnType<typeof setTimeout>;
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(mouseTimeout);
    };
  }, []);

  return (
    <div
      className={`mouse-follower ${isMouseMoving ? "active" : ""}`}
      style={{
        left: `${mousePosition.x - 10}px`, // Déplacement du cercle pour le centrer
        top: `${mousePosition.y - 10}px`, // Déplacement du cercle pour le centrer
        transform: isMouseMoving ? "scale(1.5)" : "scale(1)",
      }}
    />
  );
};

export default MouseFollower;
