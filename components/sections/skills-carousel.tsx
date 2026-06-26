"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getIcon } from "@/lib/icon-map";
import type { Skill } from "@/types/portfolio";

interface SkillsCarouselProps {
  skills: Skill[];
}

export function SkillsCarousel({ skills }: SkillsCarouselProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const [setWidth, setSetWidth] = useState(0);

  const repeatedSkills = [...skills, ...skills, ...skills];

  useEffect(() => {
    if (!listRef.current) return;

    const items = Array.from(listRef.current.children).slice(0, skills.length);
    if (items.length === 0) return;

    const first = items[0].getBoundingClientRect();
    const last = items[items.length - 1].getBoundingClientRect();
    const gap =
      items.length > 1
        ? items[1].getBoundingClientRect().left - first.right
        : 0;
    const measuredWidth = last.right - first.left + gap;

    setSetWidth(measuredWidth);
  }, [skills]);

  return (
    <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-full overflow-hidden">
      <h2 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        Skills
      </h2>
      <div className="relative w-full overflow-hidden">
        <motion.ul
          ref={listRef}
          className="flex gap-8 w-max flex-nowrap"
          animate={setWidth > 0 ? { x: [0, -setWidth] } : undefined}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
        >
          {repeatedSkills.map((skill, index) => {
            const Icon = getIcon(skill.iconKey);
            return (
              <li
                key={`${skill.iconKey}-${index}`}
                className="flex flex-col items-center w-24 shrink-0"
              >
                <Icon className="w-6 h-6 text-foreground" />
                <span className="mt-1 text-xs text-foreground">
                  {skill.name}
                </span>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
}
