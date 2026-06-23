import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/types/portfolio";

interface ExperienceSectionProps {
  experiences: Experience[];
}

function formatDate(isoPartial: string): string {
  const [year, month] = isoPartial.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-8 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-center uppercase tracking-widest text-[#3D644E] mb-12">
          Experience
        </h2>
        <ol className="space-y-6" aria-label="Work Experience timeline">
          {experiences.map((exp) => (
            <li
              key={exp.id}
              className="flex flex-col sm:flex-row gap-4 p-6 rounded-2xl bg-card/40 border border-border/80 items-start hover:border-border hover:bg-card transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary border border-border text-foreground shrink-0 shadow-sm font-serif font-bold text-lg text-primary">
                {exp.companyInitial}
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                  <h3 className="text-base md:text-lg font-serif font-bold text-foreground">
                    {exp.role} at {exp.company}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="text-xs font-semibold text-muted-foreground whitespace-nowrap bg-secondary/80 px-3 py-1 border border-border/40 self-start sm:self-auto h-auto rounded-full"
                  >
                    <time dateTime={exp.startDate}>
                      {formatDate(exp.startDate)}
                    </time>{" "}
                    -{" "}
                    {exp.endDate ? (
                      <time dateTime={exp.endDate}>
                        {formatDate(exp.endDate)}
                      </time>
                    ) : (
                      "Present"
                    )}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3 font-sans">
                  {exp.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
