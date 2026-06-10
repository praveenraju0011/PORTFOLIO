import avatar from "/assets/avatar.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-tag"> Hi, I'm</p>
          <h1 className="hero-name">Praveen Raju</h1>
          <h2 className="hero-role">Software Engineer</h2>
          <p className="hero-desc">
            I craft web experiences using modern tools.
            <br />
            Passionate about clean code, thoughtful design and building products people enjoy.
          </p>
          <div className="hero-actions">
            <a href="#basic-projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#footer" className="btn btn-ghost">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-avatar">
          <div className="avatar-glow" />
          <img src={avatar} alt="Cartoon avatar" />
        </div>
      </div>
    </section>
  );
}
