import { useEffect, useRef, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "../firebase";

type Wish = {
  id: string;
  name: string;
  message: string;
};

export default function Admin() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [search, setSearch] = useState("");

  const firstLoad = useRef(true);
  const previousCount = useRef(0);

  useEffect(() => {
    const q = query(
      collection(db, "wishes"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Wish, "id">),
      }));

      setWishes(data);

      if (firstLoad.current) {
        previousCount.current = data.length;
        firstLoad.current = false;
      } else if (data.length > previousCount.current) {
        previousCount.current = data.length;

        alert("💌 وصلت مباركة جديدة");

        new Audio(
          "https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg"
        ).play();
      }
    });

    return () => unsubscribe();
  }, []);

  const deleteWish = async (id: string) => {
    const ok = window.confirm("هل تريد حذف المباركة؟");

    if (!ok) return;

    await deleteDoc(doc(db, "wishes", id));
  };

  const copyWish = async (wish: Wish) => {
    await navigator.clipboard.writeText(
      `${wish.name}\n\n${wish.message}`
    );

    alert("✅ تم نسخ المباركة");
  };

  const filtered = wishes.filter((wish) =>
    wish.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-linear-to-b from-black via-[#120d08] to-black p-8 text-white">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-10 text-center text-5xl font-bold text-yellow-400">
          💌 Wedding Messages
        </h1>

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <h2 className="text-2xl font-bold text-yellow-300">
            عدد المباركات: {filtered.length}
          </h2>

          <input
            type="text"
            placeholder="🔍 ابحث باسم المرسل..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-yellow-500/30 bg-black p-3 text-white outline-none focus:border-yellow-400 md:w-80"
          />

        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-yellow-500/20 bg-white/5 p-10 text-center text-xl text-gray-300">
            لا توجد مباركات.
          </div>
        ) : (
          <div className="space-y-5">
            {filtered.map((wish) => (
              <div
                key={wish.id}
                className="rounded-2xl border border-yellow-500/20 bg-white/5 p-6 shadow-lg backdrop-blur-sm"
              >
                <h2 className="text-2xl font-bold text-yellow-400">
                  {wish.name}
                </h2>

                <p className="mt-4 whitespace-pre-wrap text-lg leading-8 text-white">
                  {wish.message}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">

                  <button
                    onClick={() => copyWish(wish)}
                    className="cursor-pointer rounded-lg bg-yellow-400 px-5 py-2 font-bold text-black transition hover:bg-yellow-300"
                  >
                    📋 نسخ
                  </button>

                  <button
                    onClick={() => deleteWish(wish.id)}
                    className="cursor-pointer rounded-lg bg-red-600 px-5 py-2 font-bold text-white transition hover:bg-red-500"
                  >
                    🗑 حذف
                  </button>

                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}