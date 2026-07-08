import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import story1 from "../../assets/Images/img1.jpeg";
import story2 from "../../assets/Images/img2.jpeg";
import story3 from "../../assets/Images/img3.jpeg";

const stories = [
  {
    id: 1,
    date: "25 January 2019",
    title: "First Meet",
    description:
      "The day destiny quietly introduced us. A simple hello became the beginning of our story.",
    image: story1,
  },
  {
    id: 2,
    date: "8 November 2021",
    title: "The Proposal",
    description:
      "A promise of forever surrounded by smiles and love.",
    image: story2,
  },
  {
    id: 3,
    date: "28 August 2026",
    title: "Wedding Day",
    description:
      "The first page of our forever.",
    image: story3,
  },
];


export default function StoryTimeline() {

  return (

    <section
      id="StoryTimeline"
      className="
      relative 
      overflow-hidden
      bg-linear-to-b
      from-[#fff8fa]
      via-[#fdf1f3]
      to-white
      py-20
      px-5
      "
    >

      <div className="
      absolute 
      -left-40 
      top-20
      h-96
      w-96
      rounded-full
      bg-rose-200/30
      blur-[140px]
      " />


      <div className="
      absolute
      -right-40
      bottom-10
      h-96
      w-96
      rounded-full
      bg-pink-200/30
      blur-[140px]
      " />


      <motion.div
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className="text-center mb-20"
      >

        <p className="
        uppercase
        tracking-[6px]
        text-rose-400
        text-sm
        ">
          Our Journey
        </p>


        <h2 className="
        mt-4
        text-5xl
        md:text-6xl
        font-serif
        text-[#7b3f4b]
        ">
          Our Story
        </h2>

      </motion.div>



      <div className="relative max-w-6xl mx-auto">


        {/* الخط */}
        <div
          className="
          hidden
          lg:block
          absolute
          left-1/2
          top-0
          bottom-0
          w-0.5
          -translate-x-1/2
          bg-linear-to-b
          from-rose-300
          via-pink-400
          to-rose-300
          "
        />



        {stories.map((story,index)=>(

          <div
            key={story.id}
            className={`
            relative
            mb-20
            flex
            justify-center
            lg:${index%2===0?"justify-start":"justify-end"}
            `}
          >


            <motion.div

              initial={{
                opacity:0,
                y:50
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              whileHover={{
                y:-8
              }}

              className="
              w-full
              lg:w-[45%]
              rounded-3xl
              overflow-hidden
              bg-white/80
              backdrop-blur-xl
              border
              border-rose-100
              shadow-xl
              "
            >


              {/* الصورة */}
              <div
              className="
              w-full
              aspect-4/3
              bg-white
              overflow-hidden
              "
              >

                <motion.img

                  src={story.image}

                  alt={story.title}

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



              <div className="p-7">


                <span
                className="
                inline-block
                rounded-full
                bg-rose-100
                px-4
                py-2
                text-xs
                tracking-wider
                text-rose-500
                "
                >
                  {story.date}
                </span>



                <h3
                className="
                mt-5
                text-3xl
                md:text-4xl
                font-serif
                text-[#7b3f4b]
                "
                >
                  {story.title}
                </h3>


                <p
                className="
                mt-4
                leading-8
                text-gray-600
                "
                >
                  {story.description}
                </p>


                <div
                className="
                mt-6
                h-0.75
                w-20
                rounded-full
                bg-linear-to-r
                from-rose-400
                to-pink-400
                "
                />

              </div>


            </motion.div>



            <div
            className="
            hidden
            lg:flex
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-14
            h-14
            rounded-full
            bg-white
            shadow-lg
            items-center
            justify-center
            "
            >

              <Heart
              className="
              fill-rose-400
              text-rose-400
              "
              />

            </div>


          </div>

        ))}

      </div>

    </section>
  );
}