import { useEffect, useRef } from "react";

export default function Starfield({ starCount = 800 }) {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const starsRef = useRef([]);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const DPR = window.devicePixelRatio || 1;

    function setCanvasSize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    setCanvasSize();

    function initializeStars() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      starsRef.current = Array.from({ length: starCount }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.5,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        depth: Math.random() * 2 + 0.5, // controls parallax speed
      }));
    }

    initializeStars();

    function onScroll() {
      scrollPositionRef.current = window.scrollY || 0;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      setCanvasSize();
      initializeStars();
    });

    function draw() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.fillStyle = "#0c0c0c";
      ctx.fillRect(0, 0, w, h);

      const scrollY = scrollPositionRef.current;

      for (const s of starsRef.current) {
        // twinkle
        s.twinklePhase += s.twinkleSpeed;
        const alpha = s.baseAlpha * (0.5 + 0.5 * Math.sin(s.twinklePhase));

        // stronger parallax effect (scroll feels like flying through space)
        const offsetY = (scrollY * 0.2) / s.depth; // was 0.5 → boosted to 0.2 multiplier
        const y = ((s.y - offsetY) % h + h) % h;   // wrap cleanly without jumps

        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [starCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
