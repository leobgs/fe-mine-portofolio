import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { Profile } from "@/types/portfolio";

interface HeroSectionProps {
  profile: Profile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="py-8 md:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
    >
      <Avatar className="w-32 h-32 md:w-40 md:h-40 mb-8 border-4 border-border shadow-xl bg-linear-to-br from-primary/20 to-amber-500/20 rounded-full shrink-0">
        <AvatarImage
          src={profile.avatarUrl}
          alt={`Avatar of ${profile.name}`}
          className="object-cover"
        />
        <AvatarFallback className="font-heading">
          {profile.avatarFallback}
        </AvatarFallback>
      </Avatar>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight max-w-3xl leading-tight mb-4 text-foreground">
        {profile.heading}
      </h1>
      <p className="text-foreground text-base sm:text-lg max-w-2xl leading-relaxed mb-6 font-sans">
        {profile.bio}
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {profile.ctaLinks.map((cta) => (
          <Button
            key={cta.label}
            render={<a href={cta.href} />}
            nativeButton={false}
            variant={cta.variant}
            className={
              cta.variant === "default"
                ? "rounded-full h-11 px-6 font-semibold text-sm transition-all shadow-md hover:shadow-lg active:scale-95 bg-primary text-primary-foreground hover:bg-primary/90"
                : "rounded-full h-11 px-6 font-semibold text-sm border-border hover:bg-secondary/50 hover:text-foreground transition-all active:scale-95"
            }
          >
            {cta.label}
          </Button>
        ))}
      </div>
    </section>
  );
}
