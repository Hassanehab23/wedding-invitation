import { motion } from "framer-motion";
import weddingImg from "../../assets/Images/Wedding2.jpg";


export default function SecondHero() {
 return (
    <>

      {/* HERO SECTION */}
      <section id="SecondHero" className="relative h-screen overflow-hidden">


        {/* Background Image */}
              {/* الصورة */}
              <div
              className="
              w-full
              aspect-4/3
              bg-black
              overflow-hidden
              "
              >

                <motion.img

                  src={weddingImg}

                  alt={weddingImg}

                  whileHover={{
                    scale:1.05
                  }}

                  transition={{
                    duration:.6
                  }}

                  className="
                  w-full
                  h-full
                  object-contain
                  "
                />

              </div>



        {/* Overlay */}
        <div 
          className="
          absolute 
          inset-0 
          bg-black/5
          "
        />
      </section>








    </>
  );
}