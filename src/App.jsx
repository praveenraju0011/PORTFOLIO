import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <Skills />
      <Projects
        id="basic-projects"
        title="Basic Projects"
        subtitle="Fun starter apps and development journey."
        projects={[
          {
            name: "Nike Landing Page",
            desc: "Modern Nike-inspired landing page built with a clean and responsive UI design.",
            tech: "React",
            link: "https://nike-landing-page-nine-gules.vercel.app/",
            image: "/assets/nike.png",
          },
          {
            name: "Contact Us Page",
            desc: "Responsive contact page featuring a simple and user-friendly interface.",
            tech: "React",
            link: "https://contact-page-dusky-zeta.vercel.app/",
            image: "/assets/contact_us.png",
          },
          {
            name: "Trello Clone",
            desc: "Creates boards,tickets and tracks progress of tasks like a task board.",
            tech: "React",
            link: "https://trello-delta-snowy.vercel.app/",
            image: "/assets/trello.png",
          },

          {
            name: "Non Profit Website",
            desc: "Static informational website for a nonprofit concept.",
            tech: "HTML + CSS",
            link: "https://praveen-non-profit.vercel.app/",
            image: "/assets/non_profit.png",
          },
          {
            name: "Game of Thrones UI",
            desc: "Interactive UI showcasing houses and characters.",
            tech: "JavaScript",
            link: "https://praveen-dom-got.vercel.app/",
            image: "/assets/got_app.png",
          },
          {
            name: "Memory Game",
            desc: "Classic card matching memory game built using basic javascript.",
            tech: "Javascript",
            link: "https://praveen-dom-memory-game.vercel.app/",
            image: "/assets/memory_game.png",
          },
          {
            name: "Todo App",
            desc: "Simple task manager with basic UI features.",
            tech: "JavaScript",
            link: "https://praveen-dom-todo-list-tailwind.vercel.app/",
            image: "/assets/todo_app.png",
          },
          {
            name: "Music Player",
            desc: "Simple UI of a Basic music player built with HTML and CSS only.",
            tech: "HTML + CSS",
            link: "https://praveen-music-player.vercel.app/",
            image: "/assets/music_player.png",
          },
        ]}
      />
      <Projects
        id="advanced-projects"
        title="Advanced Projects"
        subtitle="Well-crafted UI projects"
        projects={[
          {
            name: "Magical Works",
            desc: "Production studio website showcasing theater performances, acting workshops, and short film projects.",
            tech: "React",
            link: "https://www.magicalworksproduction.com/",
            image: "/assets/magical_works.png",
          },
          {
            name: "Tanjiro",
            desc: "Cocktail and mocktail discovery app with recipe browsing, drink details, and an intuitive user experience.",
            tech: "React",
            link: "https://cocktail-app-psi-flax.vercel.app/",
            image: "/assets/tanjiro.png",
          },
          {
            name: "Gem AI",
            desc: "AI-powered chat and image generation platform built with Gen AI capabilities using Gemini AI.",
            tech: "React + NodeJs",
            link: "https://gem-ai-ittp.vercel.app/",
            image: "/assets/gem_ai.png",
          },
          {
            name: "Dice Game",
            desc: "Interactive dice game built with React, featuring random dice rolls and engaging gameplay.",
            tech: "React",
            link: "https://dice-app-theta.vercel.app/",
            image: "/assets/dice_game.png",
          },
          {
            name: "Enigma",
            desc: "Modern SaaS application featuring authentication, dashboard workflows, and scalable user-focused design.",
            tech: "React",
            link: "https://saas-application-xi.vercel.app/",
            image: "/assets/enigma.png",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
