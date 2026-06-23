import { getIcon } from "@/lib/icon-map";
import type { ContactInfo } from "@/types/portfolio";

interface FooterProps {
  contact: ContactInfo;
}

export function Footer({ contact }: FooterProps) {
  return (
    <footer
      id="contact"
      className="bg-secondary/30 dark:bg-secondary/15 py-8 md:py-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start w-full">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
            Contact
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 w-full">
            {contact.bio}
          </p>
          <address className="not-italic mb-8">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border text-muted-foreground group-hover:border-foreground transition-colors shadow-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <span className="text-sm font-medium border-b border-dashed border-border group-hover:border-foreground">
                {contact.email}
              </span>
            </a>
          </address>

          <ul
            className="flex items-center gap-4"
            aria-label="Social media profiles"
          >
            {contact.socials.map((social) => {
              const Icon = getIcon(social.iconKey);
              return (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-10 h-10 items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all active:scale-95 shadow-sm"
                    title={social.platform}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="text-muted-foreground text-xs text-center mt-12">
          &copy; {new Date().getFullYear()} All rights reserved. Made with ❤️ by
          Leo
        </p>
      </div>
    </footer>
  );
}
