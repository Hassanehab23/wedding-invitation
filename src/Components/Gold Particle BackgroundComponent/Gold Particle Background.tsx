import { useEffect } from "react";

export default function GoldParticles() {
  useEffect(() => {
    const canvas = document.getElementById("gold") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    let particles: any[] = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        d: Math.random() * 1,
      });
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#D4AF37";

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.y += p.d;
        if (p.y > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <canvas
      id="gold"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}