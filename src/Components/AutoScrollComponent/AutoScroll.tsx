import { useEffect, useRef } from "react";

type Props = {
  start: boolean;
};

export default function AutoScroll({ start }: Props) {
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!start) return;

    const sections = [
      "Hero",
      "Invitation",
      "CountDown",
      "StoryTimeLine",
      "Location",
      "Gallary",
      "WishesWall",
      "Footer",
    ];

    let currentSection = 0;
    let paused = false;

    const stop = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const handleUserScroll = () => stop();

    intervalRef.current = window.setInterval(() => {
      if (paused) return;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (window.scrollY >= maxScroll) {
        stop();
        return;
      }

      window.scrollBy(0, 6);

      const section = document.getElementById(sections[currentSection]);

      if (!section) return;

      const top = section.offsetTop;

      if (window.scrollY >= top - 10) {
        paused = true;

        setTimeout(() => {
          paused = false;
          currentSection++;
        }, 5000);
      }
    }, 16);

    window.addEventListener("wheel", handleUserScroll, {
      passive: true,
    });

    window.addEventListener("touchmove", handleUserScroll, {
      passive: true,
    });

    return () => {
      stop();
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
    };
  }, [start]);

  return null;
}