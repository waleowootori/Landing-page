export default function Projects() {
  const projects = [
    {
      title: "SaaS Landing Page",
      description:
        "High-converting landing page designed for a modern SaaS product with clear CTA flow and responsive layout.",
      problem: "Client needed better conversion and modern UI.",
      solution:
        "Built a clean React + Tailwind landing page with structured sections and CTA optimization.",
      result: "Improved clarity, engagement, and user flow.",
      tech: ["React", "Tailwind", "UI/UX"],
      live: "#",
      github: "https://github.com/waleowootori/Landing-page.git",
    },
    {
      title: "Developer Portfolio",
      description:
        "Personal portfolio designed to showcase skills and improve client acquisition.",
      problem: "Needed stronger personal branding for job applications.",
      solution:
        "Built a modern responsive portfolio with case study structure and smooth UI flow.",
      result: "Improved professional presence and credibility.",
      tech: ["React", "CSS", "Netlify"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <div id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Case Studies & Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300">
            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>

            {/* Case Study Sections */}
            <div className="text-sm space-y-2 mb-5">
              <p>
                <span className="font-semibold">Problem:</span>{" "}
                {project.problem}
              </p>
              <p>
                <span className="font-semibold">Solution:</span>{" "}
                {project.solution}
              </p>
              <p>
                <span className="font-semibold">Result:</span> {project.result}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 text-sm">
              <a
                href={project.live}
                className="text-black font-medium hover:underline">
                Live Demo →
              </a>
              <a
                href={project.github}
                className="text-gray-500 hover:underline">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
