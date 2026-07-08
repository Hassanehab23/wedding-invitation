import { useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";
import { motion } from "framer-motion";

import weddingMusic from "../../assets/Musics/Party2.mp3";
import weddingMusic2 from "../../assets/Musics/Party3.mp3";


export default function MusicPlayer() {

  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  const [opened, setOpened] = useState(false);


  // الأغنية الحالية
  const [currentSong, setCurrentSong] = useState(weddingMusic);



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




  const nextSong = () => {

    setCurrentSong(weddingMusic2);


    setTimeout(() => {

      audioRef.current?.play();

    }, 100);

  };




  return (

    <>


      {!opened && (

        <motion.div

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          className="
          fixed
          inset-0
          z-999
          overflow-hidden
          bg-linear-to-b
          from-black
          via-[#120d08]
          to-black
          "

        >


          <div
          className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(212,175,55,.18),transparent_60%)]
          "
          />



          <div
          className="
          absolute
          -top-32
          -left-32
          h-72
          w-72
          rounded-full
          bg-yellow-500/10
          blur-3xl
          "
          />



          <div
          className="
          absolute
          -bottom-32
          -right-32
          h-72
          w-72
          rounded-full
          bg-yellow-500/10
          blur-3xl
          "
          />





          <div
          className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          px-4
          "
          >



            <motion.div

            initial={{
              y:40,
              opacity:0,
              scale:.95
            }}

            animate={{
              y:0,
              opacity:1,
              scale:1
            }}

            transition={{
              duration:1
            }}


            className="
            w-full
            max-w-xl
            rounded-[40px]
            border
            border-yellow-500/30
            bg-white/10
            backdrop-blur-xl
            px-8
            py-12
            text-center
            shadow-[0_0_80px_rgba(212,175,55,.25)]
            "

            >



              <div className="
              mb-6
              text-4xl
              text-yellow-400
              ">
                ✧ ❦ ✧
              </div>



              <p
              className="
              mb-3
              uppercase
              tracking-[5px]
              text-sm
              text-yellow-300
              "
              >
                Wedding Invitation
              </p>




              <h1
              className="
              font-serif
              text-6xl
              text-yellow-300
              "
              >
                مصطفى
              </h1>



              <div
              className="
              my-4
              text-5xl
              text-yellow-400
              "
              >
                ❦
              </div>



              <h1
              className="
              font-serif
              text-6xl
              text-yellow-300
              "
              >
                آية
              </h1>




              <div
              className="
              mx-auto
              my-8
              h-px
              w-40
              bg-linear-to-r
              from-transparent
              via-yellow-500
              to-transparent
              "
              />




              <button

              onClick={openInvitation}

              className="
              rounded-full
              border
              border-yellow-500
              bg-yellow-400
              px-10
              py-4
              font-bold
              text-black
              shadow-lg
              transition
              hover:scale-105
              hover:bg-yellow-300
              cursor-pointer
              "

              >

                💌 Open Invitation

              </button>



              <div className="
              mt-8
              text-4xl
              text-yellow-400
              ">
                ✧ ❦ ✧
              </div>



            </motion.div>


          </div>


        </motion.div>

      )}






      <audio

        ref={audioRef}

        src={currentSong}

        preload="auto"

        onEnded={nextSong}

      />






      {opened && (

        <button

          onClick={toggleMusic}

          className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-yellow-400
          text-black
          shadow-xl
          transition
          hover:scale-110
          cursor-pointer
          "

        >

          {
            playing 
            ? 
            <FaPause size={22}/>
            :
            <FaMusic size={22}/>
          }


        </button>

      )}


    </>

  );
}