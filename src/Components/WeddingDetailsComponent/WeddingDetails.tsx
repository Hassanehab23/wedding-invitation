import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function WeddingDetails() {

  const details = [
    {
      icon: <FaCalendarAlt />,
      title: "Date",
      value: "28 August 2026",
    },
    {
      icon: <FaClock />,
      title: "Time",
      value: "07:00 PM",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Venue",
      value: " Al Bahr Al Aazam, Cairo, Egypt",
    },
  ];

  return (
    <section id="wedding-details" className="py-28 px-6 bg-gray-200">
      <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-24">
        <p className="uppercase tracking-[8px] text-amber-500">Wedding Details</p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {details.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-yellow-400/20 rounded-3xl p-8 text-center"
          >
            <div className="text-amber-400 text-4xl mb-4">
              {item.icon}
            </div>

            <h3 className="text-amber-500 text-2xl mb-2">
              {item.title}
            </h3>

            <p className="text-amber-600">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>



  );
}