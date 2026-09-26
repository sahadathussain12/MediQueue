import AvailableTutor from "@/components/AvailableTutor";
import Benner from "@/components/Benner";
import ExtraSession1 from "@/components/ExtraSession-1";
import ExtraSession2 from "@/components/ExtraSession-2";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <main className="mt-5">

    <Benner/>
    <AvailableTutor/>
    <ExtraSession1/>
    <ExtraSession2/>
    </main>
  </div>
  );
}
