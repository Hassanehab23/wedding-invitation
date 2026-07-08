import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import story1 from "../../assets/Images/img1.jpeg";
import story2 from "../../assets/Images/img2.jpeg";
import story3 from "../../assets/Images/img3.jpeg";
const stories = [
  {id:1,date:"25 January  2019",title:"First Meet",description:"The day destiny quietly introduced us. A simple hello became the beginning of our story.",image:story1},
  {id:2,date:"11 November  2021",title:"The Proposal",description:"A promise of forever surrounded by smiles and love.",image:story2},
  {id:3,date:"28 August 2026",title:"Wedding Day",description:"The first page of our forever.",image:story3},
];

export default function StoryTimeline(){
  return (
    <section id="StoryTimeline"className="relative overflow-hidden bg-gray-400 py-16 lg:py-20">
      <div className="absolute -left-32 top-10 h-105 w-105 rounded-full bg-pink-300/20 blur-[160px]" />
      <div className="absolute -right-20 bottom-0 h-105 w-105 rounded-full bg-amber-300/20 blur-[160px]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_,i)=>(
          <motion.span key={i}
            className="absolute h-2 w-2 rounded-full bg-white"
            style={{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`}}
            animate={{y:[0,-40,0],opacity:[.2,1,.2],scale:[1,1.8,1]}}
            transition={{duration:4+Math.random()*4,repeat:Infinity,delay:Math.random()*4}}
          />
        ))}
      </div>

      <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-24">
        <p className="uppercase tracking-[8px] text-amber-500">Our Journey</p>
        <h2 className="mt-4 text-6xl font-serif">Our Story</h2>
      </motion.div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div initial={{height:0}} whileInView={{height:"100%"}} viewport={{once:true}}
          transition={{duration:2}}
          className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-0.75 rounded-full bg-linear-to-b from-amber-300 via-rose-400 to-pink-500"/>

        {stories.map((story,index)=>(
          <div key={story.id} className={`relative mb-28 flex ${index%2===0?"lg:justify-start":"lg:justify-end"}`}>
            <motion.div
              initial={{opacity:0,x:index%2===0?-120:120,y:60}}
              whileInView={{opacity:1,x:0,y:0}}
              viewport={{once:true}}
              whileHover={{y:-10}}
              className="group relative w-full lg:w-[43%] overflow-hidden rounded-4xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl">

              <div className="overflow-hidden">
                <motion.img
                  src={story.image}
                  alt={story.title}
                  whileHover={{scale:1.08,rotate:1}}
                  transition={{duration:.6}}
                  className="
h-62.5
md:h-75
lg:h-80
w-full
object-cover
object-center
transition-all
duration-700
"/>
              </div>

              <div className="absolute inset-0 -translate-x-full skew-x-12 bg-linear-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-[180%] transition-all duration-1000"/>
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"/>

              <div className="relative p-8">
                <span className="rounded-full bg-amber-100 px-4 py-2 text-sm uppercase tracking-[3px] text-amber-600">{story.date}</span>
                <h3 className="mt-5 text-4xl font-serif">{story.title}</h3>
                <p className="mt-5 leading-8 text-gray-600">{story.description}</p>
                <motion.div initial={{width:0}} whileInView={{width:70}} className="mt-8 h-0.75 bg-linear-to-r from-amber-400 to-rose-500 rounded-full"/>
              </div>
            </motion.div>

            <motion.div
              animate={{scale:[1,1.2,1],rotate:[0,-8,8,0]}}
              transition={{duration:2,repeat:Infinity}}
              className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-white shadow-xl items-center justify-center z-10">
              <Heart className="fill-rose-500 text-rose-500"/>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
