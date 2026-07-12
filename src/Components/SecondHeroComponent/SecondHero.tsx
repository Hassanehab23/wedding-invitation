import { motion } from "framer-motion";
import weddingImg from "../../assets/Images/Wedding2.jpg";

export default function SecondHero() {
  return (
    {/* HERO SECTION */}
    <section id="SecondHero" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      
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
            object-cover: بتجبر الصورة تملأ الشاشة بالكامل بدون ما تبوظ أبعادها
            object-center: بتخلي تركيز الصورة في المنتصف
          */
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay: طبقة شفافة سوداء عشان لو كتبت نص فوق الصورة يكون واضح */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* المحتوى (نصوص أو أزرار) يوضع هنا ويكون فوق الصورة */}
      <div className="relative z-10 text-center">
        {/* يمكنك إضافة أي نصوص هنا مستقبلاً */}
      </div>

    </section>
  );
        }
