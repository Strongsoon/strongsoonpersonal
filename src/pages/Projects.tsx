import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

function Projects() {
  const projects: Project[] = [
    {
      title: "Machine Learning",
      description:
        "In this project we developed a machine learning system that was able to classify histopatholegy images of colon cells. Here multiple types of ML models were created to determine which was the most effective.",
      tags: ["Neural Network", "CNN", "Batch Normalisation", "Weights"],
      github: "https://github.com/Strongsoon/machineLearning",
    },
    {
      title: "Food Microbiology Chatbot",
      description:
        "At Food Microbiology Academy, the client requested an app that allowed users to ask chatbot questions manually answered by administrators. Over a 10-week university project, a team of five students built a WordPress-based chatbot and admin dashboard enabling real-time question management and user interaction.",
      tags: ["Wordpress", "Json", "Chatbot"],
      github: "https://github.com/Strongsoon/foodmicrobiologychatbot",
      link: "https://foodmicrobiology.academy/",
    },
    {
      title: "To be added soon :)",
      description:
        "I'm building something fun. We shall see soon enough what this is",
      tags: ["Something Epic"],
      link: "google.com.au",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">My Projects</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          A collection of work that represents my journey as a developer
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              {project.title}
            </h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {project.link && (
                <a
                  href={project.link}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-800 rounded-lg hover:bg-slate-300 transition-colors text-sm"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
