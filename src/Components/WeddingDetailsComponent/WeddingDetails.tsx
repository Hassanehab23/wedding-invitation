// import {
//   FaCalendarAlt,
//   FaClock,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function WeddingDetails() {

//   const details = [
//     {
//       icon: <FaCalendarAlt />,
//       title: "Date",
//       value: "28 August 2026",
//     },
//     {
//       icon: <FaClock />,
//       title: "Time",
//       value: "08:00 PM",
//     },
//     {
//       icon: <FaMapMarkerAlt />,
//       title: "Venue",
//       value: "Al Bahr Al Aazam, Cairo, Egypt",
//     },
//   ];

//   return (
//     <section
//       id="wedding-details"
//       className="
//         py-28 
//         px-6
//         bg-linear-to-b 
//         from-[#fff7f8]
//         via-[#fdf1f3]
//         to-white
//       "
//     >

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center mb-24"
//       >
//         <p className="
//           uppercase 
//           tracking-[8px] 
//           text-rose-400
//           text-sm
//         ">
//           Wedding Details
//         </p>

//         <h2 className="
//           mt-4
//           text-4xl
//           font-serif
//           text-[#7b3f4b]
//         ">
//           Our Special Day
//         </h2>

//       </motion.div>


//       <div className="
//         max-w-6xl 
//         mx-auto 
//         grid 
//         md:grid-cols-3 
//         gap-8
//       ">

//         {details.map((item,index)=>(

//           <motion.div
//             key={index}
//             whileHover={{ y:-8 }}
//             transition={{ duration:0.3 }}

//             className="
//               rounded-3xl
//               p-8
//               text-center
//               bg-white/70
//               backdrop-blur-xl
//               border
//               border-rose-200
//               shadow-[0_10px_40px_rgba(190,80,100,0.12)]
//             "
//           >

//             <div className="
//               mx-auto
//               flex
//               items-center
//               justify-center
//               w-20
//               h-20
//               rounded-full
//               bg-rose-100
//               text-rose-400
//               text-4xl
//               mb-6
//             ">
//               {item.icon}
//             </div>


//             <h3 className="
//               text-2xl
//               font-semibold
//               text-[#8b4656]
//               mb-3
//             ">
//               {item.title}
//             </h3>


//             <p className="
//               text-[#9c6873]
//               text-lg
//             ">
//               {item.value}
//             </p>


//           </motion.div>

//         ))}

//       </div>

//     </section>
//   );
// }