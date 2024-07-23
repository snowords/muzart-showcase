"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Partners from "@/components/Partners";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-violet-950 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* <Grid /> */}
        <Concept />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Partners />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
