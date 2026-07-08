
// Premium Invitation.tsx
import { motion } from "framer-motion";

interface AnimatedTextProps{ text:string; className?:string;}

const container={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.035}}};
const child={hidden:{opacity:0,y:18},visible:{opacity:1,y:0}};

function AnimatedText({text,className}:AnimatedTextProps){
 return(
  <motion.p
   dir="rtl"
   variants={container}
   initial="hidden"
   whileInView="visible"
   viewport={{once:true}}
   className={className}
  >
   {text.split("").map((c,i)=><motion.span key={i} variants={child}>{c}</motion.span>)}
  </motion.p>
 );
}

export default function Invitation(){
 return(
<section id="Invitation" className="relative min-h-screen overflow-hidden bg-linear-to-b from-black via-[#120d08] to-black flex items-center justify-center px-5 py-24">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,.22),transparent_60%)]"/>
<div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl"/>
<div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl"/>

<motion.div
 initial={{opacity:0,scale:.88,rotateX:10}}
 whileInView={{opacity:1,scale:1,rotateX:0}}
 viewport={{once:true}}
 transition={{duration:.8}}
 className="relative w-full max-w-4xl rounded-[42px] border border-yellow-500/40 bg-white/10 backdrop-blur-xl shadow-[0_0_80px_rgba(212,175,55,.25)] p-8 md:p-14 text-center">

<div className="absolute left-6 top-6 text-yellow-400 text-3xl">❦</div>
<div className="absolute right-6 top-6 text-yellow-400 text-3xl">❦</div>
<div className="absolute left-6 bottom-6 text-yellow-400 text-3xl">❦</div>
<div className="absolute right-6 bottom-6 text-yellow-400 text-3xl">❦</div>

<div className="text-yellow-400 text-4xl mb-8">✧ ❦ ✧</div>

<AnimatedText text="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
className="font-['Aref_Ruqaa'] text-yellow-300 text-3xl mb-8"/>

<div className="rounded-xl border border-yellow-500/30 bg-black/25 p-8">
<AnimatedText
text="﴿ وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ﴾"
className="font-['Amiri'] text-white text-3xl md:text-4xl leading-loose"/>
<p className="mt-5 text-yellow-400 font-['Cairo']">سورة الروم - الآية 21</p>
</div>

<div className="w-44 h-px bg-linear-to-r from-transparent via-yellow-500 to-transparent mx-auto my-10"/>

<AnimatedText
text="بكل الحب والسعادة نتشرف بدعوتكم لمشاركتنا أجمل لحظات حياتنا وحضور حفل زفافنا، فوجودكم بيننا يزيد فرحتنا بهجةً وسرورًا."
className="font-['Cairo'] text-gray-100 text-lg leading-10"/>

<div className="my-12">
<h2 className="font-['Aref_Ruqaa'] text-3xl md:text-7xl text-yellow-300 drop-shadow-lg">مصطفى</h2>
<div className="my-4 text-5xl text-yellow-400 animate-pulse">❦</div>
<h2 className="font-['Aref_Ruqaa'] text-3xl md:text-7xl text-yellow-300 drop-shadow-lg">آية</h2>
</div>

<div className="rounded-2xl border border-yellow-500/20 bg-black/20 p-6">
<p className="font-['Cairo'] text-white text-lg">يسرنا حضوركم الكريم</p>
<p className="mt-3 text-yellow-300">الجمعة • 28 أغسطس 2026</p>
<p className="text-yellow-200">الجيزة - مصر</p>
</div>

<div className="mt-10 text-yellow-400 text-4xl">✧ ❦ ✧</div>

</motion.div>
</section>
);}
