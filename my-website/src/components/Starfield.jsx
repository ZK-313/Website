// import React, { useEffect, useRef } from "react";

// export default function Starfield({ starCount = 500 }) {
//   const canvasRef = useRef(null);
//   const rafRef = useRef(null);
//   const starsRef = useRef([]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");

//     const DPR = window.devicePixelRatio || 1;

//     function makeStars(width, height) {
//       return Array.from({ length: starCount }).map(() => ({
//         x: Math.random() * width,
//         y: Math.random() * height,
//         r: Math.random() * 1.3 + 0.2,
//         t: Math.random() * Math.PI * 2,
//         speed: 0.008 + Math.random() * 0.03,
//         baseAlpha: 0.3 + Math.random() * 0.7,
//       }));
//     }

//     function resize() {
//       const w = window.innerWidth;
//       const h = window.innerHeight;
//       // set CSS size
//       canvas.style.width = w + "px";
//       canvas.style.height = h + "px";
//       // set internal pixel buffer for DPR
//       canvas.width = Math.max(1, Math.floor(w * DPR));
//       canvas.height = Math.max(1, Math.floor(h * DPR));
//       // reset transform so drawing coordinates are in CSS pixels
//       ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
//       // regenerate stars for new size (use CSS pixels)
//       starsRef.current = makeStars(w, h);
//     }

//     resize();
//     window.addEventListener("resize", resize);

//     function draw() {
//       const w = canvas.width / DPR;
//       const h = canvas.height / DPR;

//       // background (so you can leave the section bg transparent)
//       ctx.fillStyle = "#0c0c0c";
//       ctx.fillRect(0, 0, w, h);

//       const stars = starsRef.current;
//       for (let i = 0; i < stars.length; i++) {
//         const s = stars[i];
//         s.t += s.speed;
//         const alpha = s.baseAlpha * (0.4 + 0.6 * Math.abs(Math.sin(s.t)));
//         ctx.beginPath();
//         ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
//         ctx.fill();
//       }

//       rafRef.current = requestAnimationFrame(draw);
//     }

//     rafRef.current = requestAnimationFrame(draw);

//     return () => {
//       window.removeEventListener("resize", resize);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [starCount]);

//   // pointer-events-none so canvas doesn't block UI, z-0 so it's behind content but above ancestor background
//   return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
// }

// src/components/Starfield.jsx
import { useEffect, useRef } from "react";

export default function Starfield({ starCount = 800 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const DPR = window.devicePixelRatio || 1;

    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    resize();
    let stars = Array.from({ length: starCount }).map(() => ({
      x: Math.random() * canvas.width / DPR,
      y: Math.random() * canvas.height / DPR,
      r: Math.random() * 1.5 + 0.3,
      t: Math.random() * Math.PI * 2,
      speed: 0.01 + Math.random() * 0.03,
      base: 0.3 + Math.random() * 0.7,
    }));

    function draw() {
      const w = canvas.width / DPR;
      const h = canvas.height / DPR;
      ctx.fillStyle = "#0c0c0c";
      ctx.fillRect(0, 0, w, h);

      stars.forEach((s) => {
        s.t += s.speed;
        const alpha = s.base * (0.4 + 0.6 * Math.abs(Math.sin(s.t)));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    }
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [starCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 pointer-events-none"
    />
  );
}
