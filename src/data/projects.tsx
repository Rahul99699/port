import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  sklearn: {
    title: "Scikit-learn",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  nlp: {
    title: "NLP",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "interpanel",
    category: "Intelligent Dashboard System",
    title: "InterPanel",
    src: "/assets/projects/interpanel.png",
    screenshots: ["interpanel.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
      ],
    },
    live: "https://github.com/Rahul99699/INTERVIEW_PANEL",
    github: "https://github.com/Rahul99699/INTERVIEW_PANEL",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            InterPanel – Smart interactive dashboard system
          </TypographyP>
          <TypographyP className="font-mono ">
            A smart interactive dashboard system for managing data and insights. Developed with a focus on real-time visualization and modular UI.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 space-y-2 font-mono">
            <li>Real-time data visualization</li>
            <li>Modular panel-based UI</li>
            <li>Interactive user interface</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "sentiment-analysis",
    category: "NLP System",
    title: "Sentiment Analysis System",
    src: "/assets/projects/sentiment.png",
    screenshots: ["sentiment.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.sklearn,
        PROJECT_SKILLS.nlp,
      ],
    },
    live: "https://github.com/Rahul99699/Product-review-insight-Engine",
    github: "https://github.com/Rahul99699/Product-review-insight-Engine",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Sentiment Analysis – NLP System
          </TypographyP>
          <TypographyP className="font-mono ">
            AI model that analyzes user sentiment using NLP techniques. Classifies text into positive, negative, or neutral categories with high accuracy.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 space-y-2 font-mono">
            <li>Text preprocessing & cleaning</li>
            <li>Sentiment classification model</li>
            <li>Real-time input prediction</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "multi-agent-ai",
    category: "AI Collaboration",
    title: "Multi-Agent AI Model",
    src: "/assets/projects/multiagent.png",
    screenshots: ["multiagent.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://github.com/Rahul99699/Autonomous-Multi-Agent-Research-System",
    github: "https://github.com/Rahul99699/Autonomous-Multi-Agent-Research-System",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Multi-Agent AI Model – AI Collaboration
          </TypographyP>
          <TypographyP className="font-mono ">
            Simulation of intelligent agents interacting in a dynamic environment. Designed for distributed intelligence and collaborative problem-solving.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 space-y-2 font-mono">
            <li>Agent communication system</li>
            <li>Task distribution logic</li>
            <li>Decision-making framework</li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;

