import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Features from "@/components/Features";
import Meet from "@/components/Meet";
import SelfImprovement from "@/components/SelfImprovement";
import Ratings from "@/components/Ratings";

export default function Home() {
  return (
    <main className="w-full relative">
      <Navbar />
      <Main />
      <Features />
      <Meet />
      <SelfImprovement />
      <Ratings />
    </main>
  );
}
