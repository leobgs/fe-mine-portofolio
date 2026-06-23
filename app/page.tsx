"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { DynamicBackground } from "@/components/dynamic-background";

export default function Home() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent text-foreground selection:bg-primary selection:text-primary-foreground font-sans antialiased flex flex-col justify-between transition-colors duration-300">
      <DynamicBackground />
      {/* HEADER SECTION */}
      <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto flex max-w-5xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#"
            className="font-heading font-extrabold text-xl tracking-tight text-foreground hover:text-primary transition-colors"
          >
            Leo<span className="text-primary">.</span>
          </a>

          <div className="flex items-center space-x-4">
            {/* Desktop Nav */}
            <nav className="hidden sm:flex space-x-8">
              <a
                href="#hero"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Theme Toggle Button */}
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

            {/* Mobile Nav Drawer */}
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
                      <SheetClose
                        nativeButton={false}
                        render={
                          <a
                            href="#hero"
                            className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border/40"
                          />
                        }
                      >
                        Home
                      </SheetClose>
                      <SheetClose
                        nativeButton={false}
                        render={
                          <a
                            href="#projects"
                            className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border/40"
                          />
                        }
                      >
                        Projects
                      </SheetClose>
                      <SheetClose
                        nativeButton={false}
                        render={
                          <a
                            href="#experience"
                            className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border/40"
                          />
                        }
                      >
                        Experience
                      </SheetClose>
                      <SheetClose
                        nativeButton={false}
                        render={
                          <a
                            href="#contact"
                            className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                          />
                        }
                      >
                        Contact
                      </SheetClose>
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

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-transparent">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="py-8 md:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
        >
          {/* Avatar Container */}
          <Avatar className="w-32 h-32 md:w-40 md:h-40 mb-8 border-4 border-border shadow-xl bg-linear-to-br from-primary/20 to-amber-500/20 rounded-full shrink-0">
            <AvatarImage
              src="/avatar.png"
              alt="Avatar of Leonardo"
              className="object-cover"
            />
            <AvatarFallback className="font-heading">L</AvatarFallback>
          </Avatar>
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-serif font-bold tracking-tight max-w-3xl leading-tight mb-4 text-foreground">
            I do code and make content{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-amber-600 dark:from-primary dark:to-amber-400">
              about it!
            </span>
          </h1>
          {/* Bio Description */}
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed mb-6 font-sans">
            I am a seasoned full-stack software engineer with over 8 years of
            professional experience, specializing in backend development. My
            expertise lies in crafting robust and scalable SaaS-based
            architectures on the Amazon AWS platform.
          </p>
          {/* Actions */}
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Button
              render={<a href="#contact" />}
              nativeButton={false}
              variant="default"
              className="rounded-full h-11 px-6 font-semibold text-sm transition-all shadow-md hover:shadow-lg active:scale-95 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get In Touch
            </Button>
            <Button
              render={<a href="#" />}
              nativeButton={false}
              variant="outline"
              className="rounded-full h-11 px-6 font-semibold text-sm border-border hover:bg-secondary/50 hover:text-foreground transition-all active:scale-95"
            >
              Download CV
            </Button>
          </div>
          {/* Tech Stack Row */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Experience With
            </h2>
            <ul
              className="flex items-center justify-center gap-6 flex-wrap"
              aria-label="Technologies list"
            >
              <Tooltip>
                <TooltipTrigger
                  render={
                    <li className="flex items-center justify-center w-12 h-12 rounded-xl bg-card border border-border/80 shadow-sm group hover:border-yellow-500/50 hover:shadow-md transition-all cursor-help" />
                  }
                >
                  <svg
                    className="w-6 h-6 text-muted-foreground group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 3h18v18H3V3m12.525 15.347c.563-.338.99-.877 1.282-1.613.29-.738.437-1.782.437-3.134v-.63h-1.922v.698c0 .73-.075 1.21-.225 1.442-.148.232-.455.348-.918.348-.383 0-.693-.112-.927-.338-.236-.226-.354-.595-.354-1.107v-4.148h-1.99v4.296c0 1.058.26 1.86.782 2.408.52.548 1.258.822 2.21.822.846 0 1.481-.252 1.905-.754m-6.425-2.072h1.99c-.067.81-.303 1.428-.71 1.854-.405.426-1.026.638-1.862.638-.934 0-1.636-.312-2.106-.935-.47-.624-.705-1.583-.705-2.88v-.884c0-1.305.244-2.274.733-2.908.49-.633 1.22-.95 2.19-.95.845 0 1.488.233 1.927.7.44.466.674 1.134.704 2.006h-1.99c-.033-.428-.112-.734-.236-.917-.123-.184-.337-.276-.64-.276-.328 0-.58.14-.757.42-.178.28-.266.837-.266 1.67v1.2c0 .845.086 1.4.26 1.666.173.266.42.4.742.4.305 0 .524-.095.656-.285.132-.19.2-.533.205-1.03z" />
                  </svg>
                </TooltipTrigger>
                <TooltipContent>JavaScript</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <li className="flex items-center justify-center w-12 h-12 rounded-xl bg-card border border-border/80 shadow-sm group hover:border-foreground/30 hover:shadow-md transition-all cursor-help" />
                  }
                >
                  <svg
                    className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 16.586L10.37 10.37V17H8.5V7h1.87l6.216 8.216V7H18.5v11h-1.914z" />
                  </svg>
                </TooltipTrigger>
                <TooltipContent>Next.js</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <li className="flex items-center justify-center w-12 h-12 rounded-xl bg-card border border-border/80 shadow-sm group hover:border-orange-500/50 hover:shadow-md transition-all cursor-help" />
                  }
                >
                  <svg
                    className="w-6 h-6 text-muted-foreground group-hover:text-orange-500 transition-colors"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 2l1.696 19.018L12 23l7.304-2.018L21 2H3zm14.492 5.922l-.234 2.625H8.766l.164 1.83h7.945l-.64 7.156-4.235 1.171-4.234-1.171-.274-3.078h1.922l.14 1.57 2.446.656 2.446-.656.273-3.063H6.719L6.156 5.078h11.531l-.2 2.016v.828z" />
                  </svg>
                </TooltipTrigger>
                <TooltipContent>HTML5</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <li className="flex items-center justify-center w-12 h-12 rounded-xl bg-card border border-border/80 shadow-sm group hover:border-blue-500/50 hover:shadow-md transition-all cursor-help" />
                  }
                >
                  <svg
                    className="w-6 h-6 text-muted-foreground group-hover:text-blue-500 transition-colors"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 2l1.696 19.018L12 23l7.304-2.018L21 2H3zm14.375 5.922H8.625l-.164-1.83h11.234l-.492 5.516H8.312l-.164-1.828h7.945l-.234 2.625H8.016l-.273-3.078h8.898l.234-2.625v-.78z" />
                  </svg>
                </TooltipTrigger>
                <TooltipContent>CSS3</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <li className="flex items-center justify-center w-12 h-12 rounded-xl bg-card border border-border/80 shadow-sm group hover:border-cyan-400/50 hover:shadow-md transition-all cursor-help" />
                  }
                >
                  <svg
                    className="w-6 h-6 text-muted-foreground group-hover:text-cyan-400 transition-colors"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="10"
                      ry="4"
                      transform="rotate(30 12 12)"
                    />
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="10"
                      ry="4"
                      transform="rotate(90 12 12)"
                    />
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="10"
                      ry="4"
                      transform="rotate(150 12 12)"
                    />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </TooltipTrigger>
                <TooltipContent>React</TooltipContent>
              </Tooltip>
            </ul>
          </div>
        </section>
        <Separator className="bg-border/60" />

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-8 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-center uppercase tracking-widest text-[#3D644E] mb-12">
              Experience
            </h2>
            <ol className="space-y-6" aria-label="Work Experience timeline">
              {/* Job 1 */}
              <li className="flex flex-col sm:flex-row gap-4 p-6 rounded-2xl bg-card/40 border border-border/80 items-start hover:border-border hover:bg-card transition-all">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary border border-border text-foreground shrink-0 shadow-sm">
                  {/* Google Logo */}
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.579-7.859-8s3.529-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-10.985 0-.74-.078-1.305-.175-1.86v-.35h-10.618z" />
                  </svg>
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                    <h3 className="text-base md:text-lg font-serif font-bold text-foreground">
                      Lead Software Engineer at Google
                    </h3>
                    <Badge
                      variant="secondary"
                      className="text-xs font-semibold text-muted-foreground whitespace-nowrap bg-secondary/80 px-3 py-1 border border-border/40 self-start sm:self-auto h-auto rounded-full"
                    >
                      <time dateTime="2019-11">Nov 2019</time> - Present
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3 font-sans">
                    As a Senior Software Engineer at Google, I played a pivotal
                    role in developing innovative solutions for Google's core
                    search algorithms. Collaborating with a dynamic team of
                    engineers, I contributed to the enhancement of search
                    accuracy and efficiency, optimizing user experiences for
                    millions of users worldwide.
                  </p>
                </div>
              </li>

              {/* Job 2 */}
              <li className="flex flex-col sm:flex-row gap-4 p-6 rounded-2xl bg-card/40 border border-border/80 items-start hover:border-border hover:bg-card transition-all">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary border border-border text-foreground shrink-0 shadow-sm">
                  {/* Apple Logo */}
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.51-.64.74-1.2 1.88-1.05 2.99 1.12.09 2.27-.57 3-1.44z" />
                  </svg>
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                    <h3 className="text-base md:text-lg font-serif font-bold text-foreground">
                      Junior Software Engineer at Apple
                    </h3>
                    <Badge
                      variant="secondary"
                      className="text-xs font-semibold text-muted-foreground whitespace-nowrap bg-secondary/80 px-3 py-1 border border-border/40 self-start sm:self-auto h-auto rounded-full"
                    >
                      <time dateTime="2018-01">Jan 2018</time> -{" "}
                      <time dateTime="2019-12">Dec 2019</time>
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3 font-sans">
                    During my tenure at Apple, I held the role of Software
                    Architect, where I played a key role in shaping the
                    architecture of mission-critical software projects.
                    Responsible for designing scalable and efficient systems, I
                    provided technical leadership to a cross-functional team.
                  </p>
                </div>
              </li>

              {/* Job 3 */}
              <li className="flex flex-col sm:flex-row gap-4 p-6 rounded-2xl bg-card/40 border border-border/80 items-start hover:border-border hover:bg-card transition-all">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary border border-border text-foreground shrink-0 shadow-sm">
                  {/* Meta Logo */}
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M15.545 6.558a5.18 5.18 0 0 1 3.255 1.134 5.378 5.378 0 0 1 1.94 3.1 5.352 5.352 0 0 1-.775 3.905 5.154 5.154 0 0 1-2.95 2.148c-1.39.378-2.82-.016-3.83-1.04l-.87-.89-1.2 1.25-.43-.45c.87.915 2.05 1.572 3.32 1.83 1.83.376 3.73-.134 5.14-1.385a7.126 7.126 0 0 0 2.22-4.996 7.155 7.155 0 0 0-2.86-5.748 7.07 7.07 0 0 0-7.39-.757L8.715 6.84 5.565 3.62A7.16 7.16 0 0 0 .545 10.377a7.135 7.135 0 0 0 3.2 5.568 7.042 7.042 0 0 0 7.74.225l1.69-1.745c-.86.836-2.02 1.344-3.23 1.41a5.168 5.168 0 0 1-3.66-1.576 5.38 5.38 0 0 1-1.48-3.344 5.356 5.356 0 0 1 1.32-3.766 5.138 5.138 0 0 1 3.49-1.782c1.39-.142 2.76.326 3.67 1.3l.97 1.05 1.24-1.28zm-3.41 1.62l1.64-1.7c-.89-.968-2.14-1.512-3.45-1.5a5.138 5.138 0 0 0-3.49 1.782 5.356 5.356 0 0 0-1.32 3.766 5.38 5.38 0 0 0 1.48 3.344 5.168 5.168 0 0 0 3.66 1.576c1.21-.066 2.37-.574 3.23-1.41l-1.69 1.745a7.042 7.042 0 0 1-7.74-.225 7.135 7.135 0 0 1-3.2-5.568 7.16 7.16 0 0 1 5.02-6.757l3.15 3.22z" />
                  </svg>
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                    <h3 className="text-base md:text-lg font-serif font-bold text-foreground">
                      Software Engineer at Meta
                    </h3>
                    <Badge
                      variant="secondary"
                      className="text-xs font-semibold text-muted-foreground whitespace-nowrap bg-secondary/80 px-3 py-1 border border-border/40 self-start sm:self-auto h-auto rounded-full"
                    >
                      <time dateTime="2017-01">Jan 2017</time> -{" "}
                      <time dateTime="2018-10">Oct 2018</time>
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3 font-sans">
                    At Meta, I served as a Software Engineer, focusing on the
                    design and implementation of backend systems for the social
                    media giant's dynamic platform. Working on projects that
                    involved large-scale data processing and user engagement
                    features, I leveraged my expertise to ensure seamless
                    functionality and scalability.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </main>
      <Separator className="bg-border/60" />

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="py-8 md:py-16 bg-secondary/10 dark:bg-secondary/5"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-center uppercase tracking-widest text-[#C26D4D] mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <Card className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-all hover:scale-[1.01] hover:shadow-md duration-300 shadow-sm p-0 [--card-spacing:0] ring-0">
              <div className="relative aspect-4/3 w-full bg-muted overflow-hidden">
                <Image
                  src="/html-project.png"
                  alt="HTML Tutorial Cover"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle dark overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between bg-linear-to-t from-background to-transparent pt-12">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    Power of HTML
                  </span>
                  <h3 className="text-lg font-serif font-bold text-foreground mt-1">
                    HTML Tutorial
                  </h3>
                </div>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground group-hover:bg-[#C26D4D] group-hover:text-white transition-colors"
                  aria-label="Visit HTML Project"
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

            {/* Project Card 2 */}
            <Card className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-all hover:scale-[1.01] hover:shadow-md duration-300 shadow-sm p-0 [--card-spacing:0] ring-0">
              <div className="relative aspect-4/3 w-full bg-muted overflow-hidden">
                <Image
                  src="/css-project.png"
                  alt="CSS Tutorial Cover"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle dark overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between bg-linear-to-t from-background to-transparent pt-12">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    Unlock CSS Magic
                  </span>
                  <h3 className="text-lg font-serif font-bold text-foreground mt-1">
                    CSS Tutorial
                  </h3>
                </div>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground group-hover:bg-[#C26D4D] group-hover:text-white transition-colors"
                  aria-label="Visit CSS Project"
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
          </div>
        </div>
      </section>
      <Separator className="bg-border/60" />

      {/* FOOTER & CONTACT SECTION */}
      <footer
        id="contact"
        className="bg-secondary/30 dark:bg-secondary/15 py-8 md:py-16"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info */}
          <div className="flex flex-col items-start w-full">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
              Contact
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 w-full">
              Seasoned Full Stack Software Engineer with over 8 years of
              hands-on experience in designing and implementing robust,
              scalable, and innovative web solutions. Adept at leveraging a
              comprehensive skill set encompassing front-end and back-end
              technologies.
            </p>
            <address className="not-italic mb-8">
              <a
                href="mailto:leonardobagus093@gmail.com"
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
                  leonardobagus093@gmail.com
                </span>
              </a>
            </address>
            {/* Social Media Links */}
            <ul
              className="flex items-center gap-4"
              aria-label="Social media profiles"
            >
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-10 h-10 items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all active:scale-95 shadow-sm"
                  title="Instagram"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-10 h-10 items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-all active:scale-95 shadow-sm"
                  title="X (Twitter)"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-10 h-10 items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-red-500 hover:border-red-500/50 transition-all active:scale-95 shadow-sm"
                  title="YouTube"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17Z" />
                    <polygon points="10 15 15 12 10 9" fill="currentColor" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <p className="text-muted-foreground text-xs text-center mt-12">
            &copy; {new Date().getFullYear()} All rights reserved. Made with ❤️
            by Leo
          </p>
        </div>
      </footer>
    </div>
  );
}
