import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Features from "@/components/Features";
import Meet from "@/components/Meet";
import SelfImprovement from "@/components/SelfImprovement";
import Ratings from "@/components/Ratings";
import Privacy from "@/components/Privacy";
import WorkWithUs from "@/components/WorkWithUs";
import Vacancies from "@/components/Vacancies";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-20 h-full relative">
      <div className="h-screen flex flex-col">
        <Navbar />
        <Main />
      </div>
      <Features />
      <Meet />
      <SelfImprovement />
      <Ratings />
      <Privacy />
      <WorkWithUs />
      <Vacancies />
    </main>
  );
}
