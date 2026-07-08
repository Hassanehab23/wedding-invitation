import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }


      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),

        hours: Math.floor(
          (diff / (1000 * 60 * 60)) % 24
        ),

        minutes: Math.floor(
          (diff / 1000 / 60) % 60
        ),

        seconds: Math.floor(
          (diff / 1000) % 60
        ),
      });

    }, 1000);


    return () => clearInterval(timer);

  }, []);



  const items = [
    {
      label: "Days",
      value: timeLeft.days
    },
    {
      label: "Hours",
      value: timeLeft.hours
    },
    {
      label: "Minutes",
      value: timeLeft.minutes
    },
    {
      label: "Seconds",
      value: timeLeft.seconds
    },
  ];



  return (

    <section
      className="
      relative
      overflow-hidden
      py-24
      px-5
      bg-linear-to-b
      from-[#fff8fa]
      via-[#fdeff2]
      to-white
      text-center
      "
    >


      {/* glow background */}

      <div
        className="
        absolute
        -top-20
        left-1/2
        -translate-x-1/2
        w-96
        h-96
        rounded-full
        bg-rose-200/40
        blur-3xl
        "
      />



      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        className="relative z-10"

      >

        <p
        className="
        uppercase
        tracking-[8px]
        text-rose-400
        text-sm
        mb-5
        "
        >
          Our Wedding Day
        </p>



        <h2
        className="
        text-5xl
        md:text-6xl
        font-serif
        text-[#7b3f4b]
        mb-4
        "
        >
          The Countdown Begins
        </h2>



        <p
        className="
        text-gray-500
        text-lg
        mb-14
        "
        >
          There's not much left until our special day
        </p>




        <div
        className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-5
        max-w-4xl
        mx-auto
        "
        >


        {
          items.map((item,index)=>(

            <motion.div

            key={item.label}

            initial={{
              opacity:0,
              scale:.8
            }}

            whileInView={{
              opacity:1,
              scale:1
            }}

            transition={{
              delay:index*.15
            }}

            viewport={{
              once:true
            }}


            className="
            rounded-3xl
            bg-white/70
            backdrop-blur-xl
            border
            border-rose-100
            shadow-[0_10px_30px_rgba(190,80,100,.12)]
            p-6
            "

            >


              <h3
              className="
              text-5xl
              font-serif
              text-[#8b4656]
              "
              >
                {item.value}
              </h3>


              <p
              className="
              mt-3
              uppercase
              tracking-[3px]
              text-sm
              text-rose-400
              "
              >
                {item.label}
              </p>


            </motion.div>


          ))
        }


        </div>


      </motion.div>


    </section>

  );
}