import { motion } from "framer-motion";
import weddingImg from "../../assets/Images/Wedding2.jpg";

export default function SecondHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section id="SecondHero" className="relative h-screen overflow-hidden">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <motion.img
            src={weddingImg}
            alt="Wedding Background"
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.6,
            }}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/20 pointer-events-none"
        />

        {/* يمكنك إضافة محتوى هنا مستقبلاً (مثل نصوص أو أزرار) مع إعطائها className="relative z-10" */}

      </section>
    </>
  );
}



    </>
  );
}
