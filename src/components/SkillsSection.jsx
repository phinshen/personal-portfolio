import { Code } from "lucide-react";
import { Database } from "lucide-react";
import { Server } from "lucide-react";
import tailwindLogo from "../assets/tailwind-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

export default function SkillsSection() {
  const skills = [
    {
      name: "HTML",
      icon: (
        <FontAwesomeIcon
          icon={faHtml5}
          size="2xl"
          style={{ color: "#f06529" }}
        />
      ),
    },
    {
      name: "CSS",
      icon: (
        <FontAwesomeIcon
          icon={faCss3Alt}
          size="2xl"
          style={{ color: "#264DE4" }}
        />
      ),
    },
    {
      name: "Bootstrap",
      icon: (
        <FontAwesomeIcon
          icon={faBootstrap}
          size="2xl"
          style={{ color: "#7952B3" }}
        />
      ),
    },
    {
      name: "Tailwind CSS",
      icon: <img src={tailwindLogo} alt="Tailwind CSS" className="h-8 w-8" />,
    },
    {
      name: "JavaScript",
      icon: (
        <FontAwesomeIcon
          icon={faJsSquare}
          size="2xl"
          style={{ color: "#f7df1e" }}
        />
      ),
    },
    {
      name: "React",
      icon: (
        <FontAwesomeIcon
          icon={faReact}
          size="2xl"
          style={{ color: "#61DAFB" }}
        />
      ),
    },
    {
      name: "Node.js",
      icon: (
        <FontAwesomeIcon
          icon={faNodeJs}
          size="2xl"
          style={{ color: "#339933" }}
        />
      ),
    },
    {
      name: "Express.js",
      icon: (
        <FontAwesomeIcon
          icon={faServer}
          size="2xl"
          style={{ color: "#000000" }}
        />
      ),
    },
    {
      name: "PostgreSQL",
      icon: <Database className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "NoSQL",
      icon: <Server className="h-6 w-6 text-green-600" />,
    },
  ];

  return (
    <section
      id="skills"
      className="container mx-auto py-16 px-4 md:px-6 bg-gray-50"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {skill.icon}
            <p className="mt-3 text-lg font-medium text-gray-800">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
