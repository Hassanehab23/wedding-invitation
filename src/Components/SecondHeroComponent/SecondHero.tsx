import { motion } from "framer-motion";
import weddingImg from "../../assets/Images/Wedding2.jpg";

export default function SecondHero() {
  return (
    <>
      {/* HERO SECTION */}
      {/* تم إضافة bg-black هنا عشان لو فيه مساحات فارغة تظهر بلون أسود أنيق */}
      <section id="SecondHero" className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
        
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
            /* 
              التعديل السحري هنا:
              تم تغيير object-cover إلى object-contain
              عشان الصورة تظهر كاملة بدون أي قص
            */
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Overlay: طبقة شفافة سوداء */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* المحتوى (نصوص أو أزرار) يوضع هنا ويكون فوق الصورة */}
        <div className="relative z-10 text-center">
          
        </div>
      </section>
    </>
  );
}
