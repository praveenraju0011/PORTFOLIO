import { useRef } from "react";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";

export default function Projects({ id, title, subtitle, projects }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;

    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="projects" id={id}>
      <div className="projects-head">
        <div>
          <h2 className="section-title">{title}</h2>
          <p className="section-sub">{subtitle}</p>
        </div>

        <div className="nav-buttons">
          <button aria-label="Previous" onClick={() => scroll(-1)}>
            <FiArrowLeft />
          </button>
          <button aria-label="Next" onClick={() => scroll(1)}>
            <FiArrowRight />
          </button>
        </div>
      </div>

      <div className="projects-track" ref={trackRef}>
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            {/* IMAGE SECTION */}
            <div className="project-thumb">
              {p.image ? (
                <img src={p.image} alt={p.name} loading="lazy" />
              ) : (
                <span>{p.name.charAt(0)}</span>
              )}
            </div>

            {/* CONTENT */}
            <div className="project-body">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>

              <div className="project-foot">
                <span className="tech">{p.tech}</span>
                <FiExternalLink />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
