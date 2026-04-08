import * as React from "react";
import ArrowDown from "./ArrowDown";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import ArrowUp from "./ArrowUp";
import Code from "./Code";
import Github from "./Github";
import Link from "./Link";
import LinkedIn from "./LinkedIn";
import Mail from "./Mail";
import Menu from "./Menu";
import Moon from "./Moon";
import Palette from "./Palette";
import Sun from "./Sun";
import Zap from "./Zap";

export type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

const iconMap: Record<string, IconComponent> = {
  "ArrowDown": ArrowDown,
  "ArrowLeft": ArrowLeft,
  "ArrowRight": ArrowRight,
  "ArrowUp": ArrowUp,
  "Code": Code,
  "Github": Github,
  "Link": Link,
  "LinkedIn": LinkedIn,
  "Mail": Mail,
  "Menu": Menu,
  "Moon": Moon,
  "Palette": Palette,
  "Sun": Sun,
  "Zap": Zap,
};

export default iconMap;
