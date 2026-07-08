import img1 from "../../assets/Images/1.jpeg";
import img2 from "../../assets/Images/2.jpeg";
import img3 from "../../assets/Images/3.jpeg";

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 overflow-hidden">

      <h2 className="mb-12 text-center text-4xl md:text-5xl font-bold text-yellow-400">
        Gallery
      </h2>

      <div className="
        relative 
        mx-auto 
        w-82.5 
        h-77.5
        sm:w-105
        sm:h-97.5
        md:w-175
        md:h-162.5
      ">

        {/* القلب الشمال */}
        <div
          className="
            absolute 
            left-0 
            top-0
            w-40
            h-40
            sm:w-55
            sm:h-55
            md:w-90
            md:h-90
            animate-heartbeat
          "
          style={{
            clipPath:
              "path('M180 330 L40 180 A90 90 0 1 1 180 90 A90 90 0 1 1 320 180 Z')",
          }}
        >
          <img
            src={img1}
            alt=""
            className="
              absolute
              w-[120%]
              h-[120%]
              object-cover
              left-[-10%]
              top-[-8%]
              transition
              duration-700
              hover:scale-110
            "
          />
        </div>


        {/* القلب اليمين */}
        <div
          className="
            absolute 
            right-0 
            top-0
            w-40
            h-40
            sm:w-55
            sm:h-55
            md:w-90
            md:h-90
            animate-heartbeat
          "
          style={{
            clipPath:
              "path('M180 330 L40 180 A90 90 0 1 1 180 90 A90 90 0 1 1 320 180 Z')",
          }}
        >
          <img
            src={img2}
            alt=""
            className="
              absolute
              w-[120%]
              h-[120%]
              object-cover
              left-[-10%]
              top-[-8%]
              transition
              duration-700
              hover:scale-110
            "
          />
        </div>


        {/* القلب الصغير */}
        <div
          className="
            absolute 
            left-1/2
            -translate-x-1/2
            top-33.75
            sm:top-42.5
            md:top-67.5
            z-20
            w-25
            h-25
            sm:w-35
            sm:h-35
            md:w-55
            md:h-55
            animate-heartbeat
          "
          style={{
            clipPath:
              "path('M110 200 L20 110 A55 55 0 1 1 110 50 A55 55 0 1 1 200 110 Z')",
          }}
        >
          <img
            src={img3}
            alt=""
            className="
              absolute
              w-[120%]
              h-[120%]
              object-cover
              left-[-10%]
              top-[-8%]
              transition
              duration-700
              hover:scale-110
            "
          />
        </div>


      </div>
    </section>
  );
}