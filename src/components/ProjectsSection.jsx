import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Invest-Mate",
    description: "Final year project-Ongoing  AI-Driven Personalized Financial Planning and Investment Strategy for Student.",
    image: "/projects/project1.jpg",
    tags: ["Google Colab", "Bigdata", "LLMs"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: " Testing Automation",
    description:
      " Tested REST API queries to verify API functioning, making sure that response times, status codes, and data accuracy were all right.",
    image: "/projects/project2.jpg",
    tags: ["Selenium", "TestNG", "Cucumber"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "  The supermarket management system, employing Spring Boot technology, enhances customer shopping with user-friendly features.",
    image: "/projects/project3.png",
    tags: ["React", " Spring boot", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Intern Management System",
    description:
      "Develop a digital platform for a technological solution which will be designed to help companies to find the intern pool. Also, interns can find the right opportunities available in companies.",
    image: "/projects/project4.jpg",
    tags: ["React", "Spring Boot", "GraphQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "HardWare Project",
    description:
      "Developed a system to automate the process of French fry from potato which reduces the cost exponentially.",
    image: "/projects/project5.jpg",
    tags: ["C", "Atmega", "Proteous", "Atmel Studio"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my recent work, each thoughtfully developed with a strong focus on performance, usability, and clean design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,92,246,0.7)]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(139,92,246,0.6)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 transition duration-300 ease-in-out 
             hover:shadow-[0_0_20px_4px_rgba(139,92,246,0.8)] hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Suvasthikan"
          >
            Check My Github <ArrowRight size={16} />
          </a>

        </div>
      </div>
    </section>
  );
};
