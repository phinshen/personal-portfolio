import { Code } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

export default function SkillsSection() {
  const iconClass = "h-6 w-6 text-gray-700";
  const skills = [
    {
      name: "HTML5",
      icon: (
        <FontAwesomeIcon
          icon={faHtml5}
          size="2xl"
          style={{ color: "#f06529" }}
        />
      ),
    },
    { name: "CSS3", icon: <Code /> },
    { name: "React", icon: <Code /> },
    { name: "React", icon: <Code /> },
    { name: "React", icon: <Code /> },
    { name: "React", icon: <Code /> },
    { name: "React", icon: <Code /> },
    { name: "React", icon: <Code /> },
    { name: "React", icon: <Code /> },
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
