import Hero from '@/components/Hero'; // Adjust the path as necessary
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";

import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className=" relative flex min-h-screen flex-col items-center flex justify-center overflow-clip sm:px-10 px-5 bg-black-100 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white justify-center">Sanghapal Mangale</h1>
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
