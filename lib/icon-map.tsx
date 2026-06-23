import type { ComponentType } from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiGit,
  SiSpringboot,
  SiGithub,
} from "react-icons/si";
import { TfiLinkedin } from "react-icons/tfi";

type IconProps = { className?: string };

const ICON_REGISTRY: Record<string, ComponentType<IconProps>> = {
  react: SiReact,
  javascript: SiJavascript,
  typescript: SiTypescript,
  postgresql: SiPostgresql,
  git: SiGit,
  springboot: SiSpringboot,
  github: SiGithub,
  linkedin: TfiLinkedin,
};

export function getIcon(iconKey: string): ComponentType<IconProps> {
  return ICON_REGISTRY[iconKey] ?? FallbackIcon;
}

function FallbackIcon({ className }: IconProps) {
  return <span className={className} />;
}
