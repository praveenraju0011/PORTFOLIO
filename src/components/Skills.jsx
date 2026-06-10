import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  // SiAmazonaws,
  SiDocker,
  SiGit,
  SiFigma,
  SiVercel,
  SiGreensock,
  SiVuedotjs,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  // { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  // { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#42B883" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  // { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "GSAP", icon: SiGreensock, color: "#88CE02" },

  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  // { name: "DynamoDB", icon: SiAmazonaws, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-head">
        <h2 className="section-title">Skills & Tools</h2>
      </div>
      <div className="skills-grid">
        {skills.map(({ name, icon: Icon, color }) => (
          <div className="skill-card" key={name}>
            <Icon className="skill-icon" style={{ color }} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
