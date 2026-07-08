import { useState } from "react";
import { motion } from "framer-motion";
import weddingVideo from "../../assets/Videos/Wedding.mp4";
import Invitation from "../InvitationComponent/Invitation.tsx";


export default function Hero() {

  const [showInvitation, setShowInvitation] = useState(false);


  const showInvite = () => {

    setShowInvitation(true);

    setTimeout(() => {

      document
        .getElementById("Invitation")
        ?.scrollIntoView({
          behavior: "smooth",
        });

    }, 400);

  };


  return (
    <>

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">


        {/* Background Video */}
 <video
  autoPlay
  muted
  loop
  playsInline
  className="
  absolute
  inset-0
  h-full
  w-full
  object-contain
  bg-black
  pointer-events-none
  "
>

          <source 
            src={weddingVideo} 
            type="video/mp4" 
          />

        </video>



        {/* Overlay */}
        <div 
          className="
          absolute 
          inset-0 
          bg-black/5
          "
        />




        {/* Hero Content */}
        <div
          className="
          relative
          z-10
          flex
          h-full
          flex-col
          items-center
          justify-center
          px-5
          text-center
          text-white
          "
        >



          <motion.p
            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              duration:1
            }}

            className="
            mb-5
            tracking-[5px]
            uppercase
            text-sm
            "
          >
            Together With Their Families
          </motion.p>





          <motion.h1
            initial={{
              opacity:0,
              y:-80
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:1
            }}

            className="
            text-6xl
            md:text-8xl
            font-bold
            "
          >
            Mostafa
          </motion.h1>






          <motion.div

            initial={{
              scale:0
            }}

            animate={{
              scale:1
            }}

            transition={{
              duration:0.8
            }}

            className="
            my-5
            text-5xl
            text-yellow-400
            "
          >
            ❤
          </motion.div>






          <motion.h1

            initial={{
              opacity:0,
              y:80
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:1
            }}

            className="
            text-6xl
            md:text-8xl
            font-bold
            "
          >
            Aya
          </motion.h1>







          <motion.p

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              delay:1
            }}

            className="
            mt-8
            text-xl
            md:text-2xl
            "
          >
            Invite You To Celebrate Their Wedding

          </motion.p>







          <motion.p

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              delay:1.3
            }}

            className="
            mt-3
            text-lg
            "
          >
            28 August 2026 • Giza, Egypt

          </motion.p>








          <motion.button

            whileHover={{
              scale:1.1
            }}

            whileTap={{
              scale:0.95
            }}


            onClick={showInvite}


            className="
            mt-10
            rounded-full
            border
            border-yellow-400
            px-10
            py-3
            text-yellow-400
            transition
            cursor-pointer
            hover:bg-yellow-400
            hover:text-black
            "

          >

            View Invitation

          </motion.button>





        </div>


      </section>






      {/* INVITATION SECTION */}

      {
        showInvitation && (

          <motion.div

            id="Invitation"


            initial={{
              opacity:0,
              y:100
            }}


            animate={{
              opacity:1,
              y:0
            }}


            transition={{
              duration:0.8
            }}

          >

            <Invitation />

          </motion.div>

        )
      }



    </>
  );
}