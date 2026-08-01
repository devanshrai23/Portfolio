export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "EchoBox",
    description: "AI-powered anonymous feedback platform with personalized profile links and AI-generated conversation starters.",
    tags: ["Next.js 15", "TypeScript", "NextAuth.js", "MongoDB", "OpenAI", "Zod"],
    link: "https://github.com/devanshrai23/echobox",
    image: "/EchoBox.png" 
  },
  {
    title: "Smart-SAC",
    description: "Full-stack Student Activity Center platform digitizing 7+ campus modules including equipment checkout and peer chat.",
    tags: ["ReactJS", "TypeScript", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/devanshrai23/smart-sac",
    image: "/Smart-SAC.png"
  },
  {
    title: "IIITune",
    description: "A JavaFX desktop media player with dark UI, playlist/history management, and auto metadata extraction.",
    tags: ["Java", "JavaFX", "Maven"],
    link: "https://github.com/devanshrai23/IIITune-Media-Player",
    image: "/IIITune.png"
  }
];
