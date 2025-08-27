import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "WrapVisualizer",
    description:
      "My most recent project - a web application for visualizing and customizing vehicle wraps. Built with modern frontend technologies to provide an intuitive user experience.",
    domain: "wrapvisualizer.com",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Three.js"],
    liveUrl: "https://wrapvisualizer.com",
    githubUrl: null,
  },
  {
    id: 2,
    title: "Money.ke",
    description:
      "A comprehensive financial platform for the Kenyan market. Worked as part of a development team to create user-friendly financial tools and services.",
    domain: "money.ke",
    technologies: ["React", "PHP", "MySQL", "Material-UI"],
    liveUrl: "https://money.ke",
    githubUrl: null,
  },
  {
    id: 3,
    title: "Luvia Beauty",
    description:
      "An elegant e-commerce platform for beauty products. Collaborated with a team to develop a responsive and user-friendly online shopping experience.",
    domain: "luviabeauty.co.ke",
    technologies: ["React", "Tailwind CSS", "Swiper.js", "PHP"],
    liveUrl: "https://luviabeauty.co.ke",
    githubUrl: null,
  },
  {
    id: 4,
    title: "Oaks Delivery",
    description:
      "A delivery service platform connecting customers with local businesses. Part of a team effort to create seamless ordering and delivery experiences.",
    domain: "oaks.delivery",
    technologies: ["React", "Node.js", "MySQL", "Material-UI"],
    liveUrl: "https://oaks.delivery",
    githubUrl: null,
  },
  {
    id: 5,
    title: "Youth.go.ke",
    description:
      "A government platform for youth engagement and services. Contributed to the frontend development of this important civic platform.",
    domain: "youth.go.ke",
    technologies: ["React", "TypeScript", "Tailwind CSS", "PHP"],
    liveUrl: "https://youth.go.ke",
    githubUrl: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Featured Projects</h2>
        </div>

        {/* Horizontal Projects Layout */}
        <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide">
          <div className="flex gap-6" style={{ width: "max-content" }}>
            {projects.map((project) => (
              <Card
                key={project.id}
                className="flex-shrink-0 w-80 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-2"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Favicon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden shadow-lg border-2 border-gray-200 bg-white flex items-center justify-center">
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${project.domain}&sz=64`}
                        alt={`${project.title} favicon`}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${project.title.charAt(
                            0
                          )}&background=0066ff&color=fff&size=48`;
                        }}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-black text-gray-900">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-gray-500 font-bold">
                        {project.domain}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <CardDescription className="text-gray-700 mb-4 flex-grow font-bold text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-black bg-blue-100 text-blue-800 hover:bg-blue-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="text-xs font-black bg-gray-100 text-gray-700"
                      >
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 font-black text-white shadow-lg hover:shadow-xl transition-all duration-200"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Site
                    </Button>
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 font-black border-2 border-gray-300 hover:border-gray-500"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="font-black text-lg px-8 py-3 border-2 border-gray-400 hover:border-gray-600"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
