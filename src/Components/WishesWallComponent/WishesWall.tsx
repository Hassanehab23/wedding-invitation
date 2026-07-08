import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

import { db } from "../../firebase";

type Wish = {
  id: string;
  name: string;
  message: string;
};

export default function WishesWall() {
  const [wish, setWish] = useState({
    name: "",
    message: "",
  });

  const [list, setList] = useState<Wish[]>([]);

  // قراءة معرف الدعوة من الرابط
  const params = new URLSearchParams(window.location.search);
  const inviteId = params.get("id") || "default";

  // تحميل المباركات الخاصة بنفس الدعوة فقط
  useEffect(() => {
    const q = query(
      collection(db, "wishes"),
      where("inviteId", "==", inviteId),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const wishes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Wish, "id">),
      }));

      setList(wishes);
    });

    return () => unsubscribe();
  }, [inviteId]);

  // إضافة مباركة
  const addWish = async () => {
    if (!wish.name.trim() || !wish.message.trim()) return;

    try {
      await addDoc(collection(db, "wishes"), {
        inviteId,
        name: wish.name,
        message: wish.message,
        createdAt: serverTimestamp(),
      });

      setWish({
        name: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء إرسال المباركة.");
    }
  };

  return (
    <section className="py-28 px-6">
      <h2 className="mb-16 text-center text-5xl font-bold text-yellow-400">
        Wishes Wall
      </h2>

      <div className="mx-auto max-w-2xl space-y-4">
        <input
          placeholder="Your Name"
          value={wish.name}
          onChange={(e) =>
            setWish({
              ...wish,
              name: e.target.value,
            })
          }
          className="w-full rounded-xl border border-gray-700 bg-black p-4 text-white outline-none focus:border-yellow-400"
        />

        <textarea
          rows={5}
          placeholder="Write your wishes..."
          value={wish.message}
          onChange={(e) =>
            setWish({
              ...wish,
              message: e.target.value,
            })
          }
          className="w-full rounded-xl border border-gray-700 bg-black p-4 text-white outline-none focus:border-yellow-400"
        />

        <button
          onClick={addWish}
          className="w-full cursor-pointer rounded-xl bg-yellow-400 py-3 font-bold text-black transition hover:bg-yellow-300"
        >
          Send Wish ❤️
        </button>

        <div className="mt-10 space-y-4">
          {list.map((w) => (
            <div
              key={w.id}
              className="rounded-xl border border-yellow-400/20 bg-white/5 p-5"
            >
              <h3 className="text-lg font-bold text-yellow-400">
                {w.name}
              </h3>

              <p className="mt-2 whitespace-pre-wrap text-white">
                {w.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}