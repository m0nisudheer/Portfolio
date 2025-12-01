"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


declare module "framer-motion" {
  interface MotionProps {
    className?: string;
  }



  interface SVGMotionProps<T> {
    className?: string;
  }
}


export default function ResumePage() {
  const boxRef = useRef(null);

  
  const experience = [
    {
      title: "Front-End Developer — Vithi IT Solutions | Mar 2024 – Present",
      desc: "Building responsive UI, integrating APIs & developing reusable components using Next.js.",
      icon: "➤",
    },
    {
      title: "Laverne",
      desc: "Developed a resort booking website with smooth UX using Next.js.",
      icon: "•",
    },
    {
      title: "Amaiya",
      desc: "Built a bakery booking platform with improved UI & booking features.",
      icon: "•",
    },
    {
      title: "Kotrike",
      desc: "Worked on HRMS dashboards using Next.js and Tailwind CSS.",
      icon: "•",
    },
    {
      title: "QR Gate App",
      desc: "Developed a React Native app for real-time student/staff tracking.",
      icon: "•",
    },
  ];

  const frameworks = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "REST APIs",
  ];

  const tools = [
    "VS Code",
    "Git",
    "GitHub",
    "Postman",
    "Figma",
    "Chrome DevTools",
    "NPM",
    "Yarn",
    "Vite",
  ];

  const softSkills = [
    "attention to detail",
    "time management",
    "team working",
    "taking responsibility",
    "willing to learn",
    "research",
  ];

 
  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      {
        clipPath: "circle(10px at 50% 50%)",
        opacity: 0.5,
      },
      {
        clipPath: "circle(100% at 50% 50%)",
        opacity: 1,
        duration: 3,
        ease: "circ.out",
      }
    );
  }, []);

  return (
    <section
      id="resume"
      className="bg-[#f3f3f3] xl:h-screen w-full flex justify-center items-center xl:px-5 xl:py-28"
    >
      <div
        ref={boxRef}
        className=" p-5 shadow-2xl rounded-xl flex xl:flex-row flex-col gap-4 border border-[#1d1d1b] bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/white-wall-background.jpg')",
          backgroundBlendMode: "multiply",
        }}
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col xl:gap-10">
          <motion.div
            whileHover={{ rotate: 5 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="relative bg-white p-2 w-fit shadow-lg -rotate-2 border border-black"
          >
            <Image
              src="/assets/portfolioImg.jpeg"
              width={280}
              height={260}
              alt="profile"
              className="w-[500px] h-[280px] object-cover border-2 border-black"
            />
            <div className="absolute top-[-20px] left-6 w-[30px] h-[80px] border-[3px] border-black rounded-[20px] border-b-0 -rotate-6"></div>
          </motion.div>

          <div>
            <h3 className="text-2xl font-serif mb-2 text-black">Contact</h3>
            <p className="leading-relaxed text-black">+91 93462 40660</p>
            <p className="leading-relaxed text-black">
              sudheer102002@gmail.com
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <h1 className="text-center text-5xl font-serif text-black">
              About me
            </h1>

            <a
              href="/assets/ManiSudheer's Resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 border border-black  text-black rounded-md font-serif text-sm hover:bg-black hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
            </a>
          </div>

          <div className="grid xl:grid-cols-3 grid-cols-1 gap-4">
            {/* EXPERIENCE BOX */}
            <div className="border border-[#1d1d1b]  rounded-4xl p-3">

            <div className="fancy-border h-full">

              <h2 className="inline-block bg-[#e5e5e5] px-3 py-1 text-[22px] mb-5 font-serif text-black border border-gray-400">
                Experience
              </h2>

              {experience.map((exp) => (
                <div key={exp.title} className="flex gap-2 mb-4">
                  <span className="text-xl text-black">{exp.icon}</span>
                  <div>
                    <p className="font-semibold text-[16px] text-black">
                      {exp.title}
                    </p>
                    <p className="text-sm text-gray-700">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>

            {/* FRAMEWORKS + TOOLS */}
            <div className="flex flex-col gap-2">

            <div className="border border-[#1d1d1b]  rounded-4xl p-3">
            <div className="fancy-border h-full">

              <h2 className="inline-block bg-[#e5e5e5] px-3 py-1 text-[22px] mb-4 font-serif border border-gray-400 text-black">
                Frameworks
              </h2>

              <div className="flex flex-wrap gap-3 mb-6">
                {frameworks.map((fw) => (
                  <span
                    key={fw}
                    className="px-4 py-1.5 border border-black rounded-md text-sm  text-black"
                  >
                    {fw}
                  </span>
                ))}
              </div>
               </div>
 </div>
<div className="border border-[#1d1d1b]  rounded-4xl p-3">
            <div className="fancy-border h-full">
              <h2 className="inline-block bg-[#e5e5e5] px-3 py-1 text-[22px] mb-4 font-serif border border-gray-400 text-black">
                Tools
              </h2>

              <div className="flex flex-wrap gap-3 mb-6">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-1.5 border border-black rounded-md text-sm  text-black"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              </div>
 </div>
            </div>

            {/* EDUCATION + SOFT SKILLS */}
           
            <div className="border border-[#1d1d1b]  rounded-4xl p-2">
            <div className="fancy-border h-full">
              <h2 className="inline-block bg-[#e5e5e5] px-3 py-1 text-[22px] mb-4 font-serif border border-gray-400 text-black">
                Education
              </h2>

              <div className="relative pl-6 mb-4">
                <div className="absolute left-0 top-1 w-5 h-5 bg-[#d1d1d1] rotate-[-12deg] border border-black"></div>
                <p className="font-semibold text-black">
                  B.Tech – Computer Science & Engineering
                </p>
                <p className="text-sm text-gray-700">
                  Bapatla Engineering College (2020–2024) <br /> CGPA: 8.6
                </p>
              </div>

              <h2 className="inline-block bg-[#e5e5e5] px-3 py-1 text-[22px] mt-4 mb-2 font-serif border border-gray-400 text-black">
                Soft Skills
              </h2>

              <ul className="mt-2 space-y-2 text-black">
                {softSkills.map((s) => (
                  <li key={s} className="list-disc ml-5 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
