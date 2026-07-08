import { useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";
import { motion } from "framer-motion";
import weddingMusic from "../../assets/Musics/Party3.mp3";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [opened, setOpened] = useState(false);

  const openInvitation = async () => {
    setOpened(true);
    if (!audioRef.current) return;
    try {
      audioRef.current.volume = 1;
      await audioRef.current.play();
      setPlaying(true);
    } catch (e) {
      console.error(e);
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      await audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      {!opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-999 overflow-hidden bg-linear-to-b from-black via-[#120d08] to-black"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,.18),transparent_60%)]" />
          <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

          <div className="relative flex min-h-screen items-center justify-center px-4 sm:px-6">
            <motion.div
              initial={{ y: 40, opacity: 0, scale: .95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-[28px] md:rounded-[40px] border border-yellow-500/30 bg-white/10 backdrop-blur-xl px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 text-center shadow-[0_0_80px_rgba(212,175,55,.25)]"
            >
              <div className="mb-6 text-2xl sm:text-3xl md:text-4xl text-yellow-400">✧ ❦ ✧</div>

              <p className="mb-3 font-['Cairo'] uppercase tracking-[3px] sm:tracking-[5px] text-xs sm:text-sm md:text-base text-yellow-300">
                Wedding Invitation
              </p>

              <h1 className="font-['Aref_Ruqaa'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-300">مصطفى</h1>
              <div className="my-4 text-3xl sm:text-4xl md:text-5xl text-yellow-400">❦</div>
              <h1 className="font-['Aref_Ruqaa'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-300">آية</h1>

              <div className="mx-auto my-8 h-px w-24 sm:w-32 md:w-40 bg-linear-to-r from-transparent via-yellow-500 to-transparent" />

              <button
                onClick={openInvitation}
                className="w-full sm:w-auto rounded-full border border-yellow-500 bg-yellow-400 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base font-bold text-black shadow-lg transition hover:bg-yellow-300 hover:scale-105 cursor-pointer"
              >
                💌 Open Invitation
              </button>

              <div className="mt-8 text-2xl sm:text-3xl md:text-4xl text-yellow-400">✧ ❦ ✧</div>
            </motion.div>
          </div>
        </motion.div>
      )}

      <audio ref={audioRef} src={weddingMusic} loop preload="auto" />

      {opened && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-yellow-400 text-black shadow-xl transition hover:scale-110 cursor-pointer"
        >
          {playing ? <FaPause size={22} /> : <FaMusic size={22} />}
        </button>
      )}
    </>
  );
}
