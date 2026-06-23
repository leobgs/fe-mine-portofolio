"use client";

import { motion } from "framer-motion";
import { getIcon } from "@/lib/icon-map";
import type { Skill } from "@/types/portfolio";

interface SkillsCarouselProps {
  skills: Skill[];
}

const SLOT_WIDTH = 128;

export function SkillsCarousel({ skills }: SkillsCarouselProps) {
  const totalWidth = skills.length * SLOT_WIDTH;
  const doubledSkills = [...skills, ...skills];

  return (
    <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-full overflow-hidden">
      <h2 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        Skills
      </h2>
      <div className="relative w-full overflow-hidden">
        <motion.ul
          className="flex gap-8 w-max flex-nowrap"
          animate={{ x: [0, -totalWidth] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {doubledSkills.map((skill, index) => {
            const Icon = getIcon(skill.iconKey);
            return (
              <li
                key={`${skill.iconKey}-${index}`}
                className="flex flex-col items-center w-24 shrink-0"
              >
                <Icon className="w-6 h-6 text-primary" />
                <span className="mt-1 text-xs text-muted-foreground">
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
