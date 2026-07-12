import { useEffect, useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";
import { motion } from "framer-motion";

import weddingMusic1 from "../../assets/Musics/Party2.mp3";
import weddingMusic2 from "../../assets/Musics/Party4.mp3";
import weddingMusic3 from "../../assets/Musics/Party5.mp3";

type MusicPlayerProps = {
  onOpen: () => void;
};

export default function MusicPlayer({ onOpen }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [opened, setOpened] = useState(false);

  const playlist = [
    weddingMusic1,
    weddingMusic2,
    weddingMusic3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const openInvitation = async () => {
    setOpened(true);
    onOpen();

    if (!audioRef.current) return;

    try {
      audioRef.current.volume = 1;
      await audioRef.current.play();
      setPlaying(true);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

const nextSong = () => {
  setCurrentIndex((prev) => {
    if (prev < playlist.length - 1) {
      return prev + 1;
    }

    return prev;
  });
};

  useEffect(() => {
    if (!opened || !audioRef.current) return;

    audioRef.current.load();

    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(console.error);
  }, [currentIndex, opened]);

  return (
    <>
      {!opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-999 overflow-hidden bg-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,.18),transparent_60%)]" />

          <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

          <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

          <div className="relative flex min-h-screen items-center justify-center px-4">
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl rounded-[40px] border border-yellow-500/30 bg-white/10 px-8 py-12 text-center shadow-[0_0_80px_rgba(212,175,55,.25)] backdrop-blur-xl"
            >
              <div className="mb-6 text-4xl text-[#7b3f4b]">
                ✧ ❦ ✧
              </div>

              <p className="mb-3 text-sm uppercase tracking-[5px] text-[#7b3f4b]">
                Wedding Invitation
              </p>

              <h1 className="font-serif text-6xl text-[#7b3f4b]">
                مصطفى
              </h1>

              <div className="my-4 text-5xl text-[#7b3f4b]">
                ❦
              </div>

              <h1 className="font-serif text-6xl text-[#7b3f4b]">
                آية
              </h1>

              <div className="mx-auto my-8 h-px w-40 bg-linear-to-r from-transparent via-[#7b3f4b] to-transparent" />

              <button
                onClick={openInvitation}
                className="cursor-pointer rounded-full border border-[#7b3f4b] bg-[#7b3f4b] px-10 py-4 font-bold text-black shadow-lg transition hover:scale-105"
              >
                Open Invitation 💌
              </button>

              <div className="mt-8 text-4xl text-[#7b3f4b]">
                ✧ ❦ ✧
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

<audio
  ref={audioRef}
  src={playlist[currentIndex]}
  preload="auto"
  onEnded={nextSong}
  loop={currentIndex === playlist.length - 1}
/>

      {opened && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-yellow-400 text-black shadow-xl transition hover:scale-110"
        >
          {playing ? <FaPause size={22} /> : <FaMusic size={22} />}
        </button>
      )}
    </>
  );
}