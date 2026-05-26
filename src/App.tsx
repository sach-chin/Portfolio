type Project = {
  title: string;
  desc: string;
  tech: string[];
};

export default function Portfolio(): JSX.Element {
  const projects: Project[] = [
    {
      title: "Chrome Extension",
      desc: "Browser extension focused on improving productivity and workflow automation.",
      tech: ["React", "JavaScript", "Chrome APIs"],
    },
    {
      title: "AI Research Project",
      desc: "Research-oriented project involving AI and semantic feature analysis.",
      tech: ["Python", "Deep Learning", "AI"],
    },
    {
      title: "Automation Tool",
      desc: "Tool built for automating repetitive development tasks and workflows.",
      tech: ["Python", "Node.js", "Automation"],
    },
  ];

  const skills: string[] = [
    "React",
    "JavaScript",
    "Python",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Chrome Extensions",
    "Node.js",
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">Sachin MN</h1>

          <div className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#home" className="hover:text-blue-400 duration-300 transition">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400 duration-300 transition">
              About
            </a>
            <a href="#skills" className="hover:text-blue-400 duration-300 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-400 duration-300 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400 duration-300 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-zinc-400 mb-4 text-lg">Hello, I'm</p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Sachin <span className="text-blue-500">MN</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-zinc-300 mb-6">
              Developer | AI & Web Technologies
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
              Passionate about building browser extensions, automation tools,
              and AI-driven applications with clean user experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl font-medium">
                Download Resume
              </button>

              <button className="px-6 py-3 border border-zinc-700 hover:border-white transition rounded-xl font-medium">
                GitHub
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-[0_0_60px_rgba(59,130,246,0.5)]">
              <img
                src="/profile.png"
                alt="profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-zinc-400 leading-relaxed text-lg">
                I am a developer interested in web technologies, AI systems,
                browser extensions, and automation solutions. I enjoy building
                scalable and practical applications with clean UI and smooth
                user experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                <h3 className="text-3xl font-bold mb-2">10+</h3>
                <p className="text-zinc-400">Projects</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                <h3 className="text-3xl font-bold mb-2">3+</h3>
                <p className="text-zinc-400">Research Works</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-blue-500 transition group"
              >
                <div className="h-52 bg-gradient-to-br from-zinc-800 to-zinc-700"></div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-500 transition">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 bg-zinc-800 rounded-lg text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-sm">
                      Live Demo
                    </button>

                    <button className="px-4 py-2 border border-zinc-700 rounded-lg hover:border-white transition text-sm">
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

          <p className="text-zinc-400 text-lg mb-10">
            Feel free to connect with me for collaborations, projects, or
            opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition">
              LinkedIn
            </button>

            <button className="px-6 py-3 border border-zinc-700 rounded-xl hover:border-white transition">
              GitHub
            </button>

            <button className="px-6 py-3 border border-zinc-700 rounded-xl hover:border-white transition">
              Email
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 text-center text-zinc-500 text-sm">
        © 2026 Sachin MN. All rights reserved.
      </footer>
    </div>
  );
}
