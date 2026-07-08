import { motion } from "framer-motion";

export default function Location() {
  // إحداثيات القاعة
  const destination = "30.0124909,31.2178204";

  // رابط الخريطة داخل الـ iframe
  const mapUrl = `https://www.google.com/maps?q=${destination}&z=17&output=embed`;

  // رابط الاتجاهات
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;

  return (
    <section
      id="location"
      className="bg-gray-200 py-28 px-6 text-center text-white"
    >
      <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-24">
        <p className="uppercase tracking-[8px] text-amber-500">Venu</p>
      </motion.div>

      <p className="mb-6 text-lg text-amber-300">
        Al Saraya Halls (Retal View Hall), Al Bahr Al Aazam, Giza, Egypt
      </p>

      {/* الخريطة */}
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-yellow-400/20 shadow-lg">
        <iframe
          src={mapUrl}
          width="100%"
          height="400"
          className="w-full"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Wedding Venue Location"
        />

        {/* طبقة شفافة فوق الخريطة */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 cursor-pointer"
          aria-label="Open location in Google Maps"
        />
      </div>

      {/* زر الاتجاهات */}
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-yellow-400 px-8 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
      >
        📍 Get Directions
      </a>
    </section>
  );
}