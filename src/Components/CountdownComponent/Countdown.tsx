import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2026-08-28T19:00:00");
    const timer = setInterval(() => {
    const diff = weddingDate.getTime() - new Date().getTime();

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-400 text-white py-20 text-center">
      <h2 className="text-5xl font-bold text-yellow-400 mb-10">
      <p className="text-3xl font-bold text-white">There's not much left.</p>
      </h2>
      <div className="flex justify-center gap-10 text-amber-200 text-xl">
        <div>{timeLeft.days} Days</div>
        <div>{timeLeft.hours} Hours</div>
        <div>{timeLeft.minutes} Min</div>
        <div>{timeLeft.seconds} Sec</div>
      </div>
    </section>
  );
}