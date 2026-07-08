import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Location() {

  const destination = "30.0124909,31.2178204";

  const mapUrl = `https://www.google.com/maps?q=${destination}&z=17&output=embed`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;


  return (

    <section
      id="location"
      className="
      relative
      overflow-hidden
      py-28
      px-6
      text-center
      bg-linear-to-b
      from-white
      via-[#fff5f7]
      to-[#fdecef]
      "
    >


      {/* background glow */}

      <div
        className="
        absolute
        -left-32
        top-20
        w-96
        h-96
        rounded-full
        bg-rose-200/40
        blur-3xl
        "
      />


      <div
        className="
        absolute
        -right-32
        bottom-10
        w-96
        h-96
        rounded-full
        bg-pink-200/40
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

        className="
        relative
        z-10
        mb-16
        "

      >

        <p
        className="
        uppercase
        tracking-[8px]
        text-rose-400
        text-sm
        "
        >
          Venue
        </p>


        <h2
        className="
        mt-5
        text-5xl
        md:text-6xl
        font-serif
        text-[#7b3f4b]
        "
        >
          Find Our Location
        </h2>


      </motion.div>




      <motion.div

      initial={{
        opacity:0,
        scale:.9
      }}

      whileInView={{
        opacity:1,
        scale:1
      }}

      viewport={{
        once:true
      }}

      className="
      relative
      z-10
      max-w-5xl
      mx-auto
      "

      >



        <div
        className="
        mb-8
        flex
        items-center
        justify-center
        gap-3
        text-[#8b4656]
        text-xl
        "
        >

          <FaMapMarkerAlt
          className="text-rose-400"
          />

          <p>
            Al Saraya Halls (Retal View Hall)
            <br />
            Al Bahr Al Aazam, Giza, Egypt
          </p>

        </div>





        {/* Map Card */}

        <div
        className="
        overflow-hidden
        rounded-3xl
        border
        border-rose-100
        bg-white/70
        backdrop-blur-xl
        shadow-[0_15px_50px_rgba(190,80,100,.15)]
        "
        >

          <iframe

            src={mapUrl}

            width="100%"

            height="420"

            className="
            w-full
            "

            style={{
              border:0
            }}

            loading="lazy"

            allowFullScreen

            referrerPolicy="no-referrer-when-downgrade"

            title="Wedding Venue Location"

          />


        </div>




        {/* Button */}

        <a

        href={directionsUrl}

        target="_blank"

        rel="noopener noreferrer"

        className="
        mt-10
        inline-flex
        items-center
        gap-3
        rounded-full
        bg-[#8b4656]
        px-10
        py-4
        text-white
        font-semibold
        shadow-lg
        transition
        duration-300
        hover:scale-105
        hover:bg-[#733746]
        "

        >

          <FaMapMarkerAlt />

          Get Directions

        </a>



      </motion.div>



    </section>

  );
}