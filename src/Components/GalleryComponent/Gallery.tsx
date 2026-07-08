import img1 from "../../assets/Images/1.jpeg";
import img2 from "../../assets/Images/2.jpeg";
import img3 from "../../assets/Images/3.jpeg";

export default function Gallery() {
  return (
    <section className="py-28">
      <h2 className="text-center text-5xl font-bold text-yellow-400 mb-16">
        Gallery
      </h2>

      <div className="relative w-175 h-162.5 mx-auto">

        {/* القلب الشمال */}
        <div
          className="absolute left-0 top-0 w-90 h-90 animate-heartbeat"
          style={{
            clipPath:
              "path('M180 330 L40 180 A90 90 0 1 1 180 90 A90 90 0 1 1 320 180 Z')",
          }}
        >
          <img
            src={img1}
            alt=""
             className="absolute
               w-[120%]
               h-[120%]
               object-cover
               left-[-10%]
               top-[-8%]
               hover:scale-110
               duration-700"
          />
        </div>

        {/* القلب اليمين */}
        <div
          className="absolute right-0 top-0 w-90 h-90 animate-heartbeat"
          style={{
            clipPath:
              "path('M180 330 L40 180 A90 90 0 1 1 180 90 A90 90 0 1 1 320 180 Z')",
          }}
        >
          <img
            src={img2}
            alt=""
             className="absolute
               w-[120%]
               h-[120%]
               object-cover
               left-[-10%]
               top-[-8%]
               hover:scale-110
               duration-700"
          />
        </div>

        {/* القلب الصغير */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-67.5 w-55 h-55 z-20 animate-heartbeat"
          style={{
            clipPath:
              "path('M110 200 L20 110 A55 55 0 1 1 110 50 A55 55 0 1 1 200 110 Z')",
          }}
        >
          <img
            src={img3}
            alt=""
             className="absolute
               w-[120%]
               h-[120%]
               object-cover
               left-[-10%]
               top-[-8%]
               hover:scale-110
               duration-700"
          />
        </div>

      </div>
    </section>
  );
}