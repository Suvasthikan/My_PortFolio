import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))} */}
    </div>
  );
};












// export const AuroraBackground = () => {
//   return (
//     <div className="aurora-effect">
//       {/* If you use styled-jsx, use <style jsx> instead. For plain React, just <style> */}
//       <style>{`
//         .aurora-effect {
//           position: fixed;
//           inset: 0;
//           z-index: 0; /* Changed from -10 to 0 for visibility */
//           background: radial-gradient(
//               ellipse at 20% 40%,
//               rgba(139, 92, 246, 0.3),
//               transparent 60%
//             ),
//             radial-gradient(
//               ellipse at 80% 60%,
//               rgba(139, 92, 246, 0.2),
//               transparent 70%
//             ),
//             radial-gradient(
//               ellipse at 50% 50%,
//               rgba(139, 92, 246, 0.15),
//               transparent 80%
//             ),
//             hsl(var(--background));
//           /* background-size removed for gradients */
//           animation: auroraMove 20s ease-in-out infinite;
//         }

//         @keyframes auroraMove {
//           0%,
//           100% {
//             background-position: 0% 0%, 100% 100%, 50% 50%, 0 0;
//           }
//           50% {
//             background-position: 100% 0%, 0% 100%, 50% 70%, 0 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };
