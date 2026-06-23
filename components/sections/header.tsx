"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import type { NavItem } from "@/types/portfolio";

interface HeaderProps {
  navItems: NavItem[];
}

export function Header({ navItems }: HeaderProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex max-w-5xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="font-heading font-extrabold text-xl tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Leo<span className="text-primary">.</span>
        </a>

        <div className="flex items-center space-x-4">
          <nav className="hidden sm:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="text-muted-foreground hover:text-foreground transition-colors rounded-full"
              aria-label="Toggle theme"
              value={theme}
            >
              {resolvedTheme === "dark" ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </Button>
          )}
          <div className="sm:hidden flex items-center">
            <Sheet>
              <SheetTrigger
                render={
                  <Button
                    nativeButton
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground"
                  />
                }
                aria-label="Open navigation menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-card border-border text-foreground p-6 flex flex-col justify-between"
              >
                <div className="flex flex-col gap-6 mt-12">
                  <span className="font-heading font-extrabold text-xl tracking-tight text-foreground mb-4">
                    Leo<span className="text-primary">.</span>
                  </span>
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item, index) => (
                      <SheetClose
                        key={item.href}
                        nativeButton={false}
                        render={
                          <a
                            href={item.href}
                            className={`text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 ${
                              index < navItems.length - 1
                                ? "border-b border-border/40"
                                : ""
                            }`}
                          />
                        }
                      >
                        {item.label}
                      </SheetClose>
                    ))}
                  </nav>
                </div>
                <div className="text-xs text-muted-foreground">
                  &copy; {new Date().getFullYear()} All rights reserved.
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
