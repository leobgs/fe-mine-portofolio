import Image from "next/image";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/portfolio";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="py-8 md:py-16 bg-secondary/10 dark:bg-secondary/5"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-center uppercase tracking-widest text-[#C26D4D] mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-all hover:scale-[1.01] hover:shadow-md duration-300 shadow-sm p-0 [--card-spacing:0] ring-0"
            >
              <div className="relative aspect-4/3 w-full bg-muted overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} Cover`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between bg-linear-to-t from-background to-transparent pt-12">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    {project.subtitle}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-foreground mt-1">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.projectUrl}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground group-hover:bg-[#C26D4D] group-hover:text-white transition-colors"
                  aria-label={`Visit ${project.title}`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
