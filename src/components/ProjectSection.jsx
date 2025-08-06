import { ExternalLink, Github } from "lucide-react";

export default function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "E-commer Store",
      description:
        "A Full stack e-commerce platform with user authentication, product listings, and a shopping cart.",
      image: "#",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "E-commer Store",
      description:
        "A Full stack e-commerce platform with user authentication, product listings, and a shopping cart.",
      image: "/placeholder.svg",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "E-commer Store",
      description:
        "A Full stack e-commerce platform with user authentication, product listings, and a shopping cart.",
      image: "#",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="project" className="container mx-auto py-16 px-4 md: px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
            <div className="p-6 pt-0 mt-auto flex flex-col sm:flex-row justify-end gap-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto px-4 py-2 border border-gray-300 text-gray-900 hover:bg-gray-100 rounded-xl flex justify-center items-center gap-2 transition">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </button>
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto px-4 py-2 bg-gray-900 text-white hover:bg-gray-700 rounded-xl flex justify-center items-center gap-2 transition m-0">
                  <Github className="h-4 w-4" />
                  GitHub
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
