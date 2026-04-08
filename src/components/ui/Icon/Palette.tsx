import * as React from "react";

export type PaletteIconProps = React.SVGProps<SVGSVGElement>;

const PaletteIcon = React.forwardRef<SVGSVGElement, PaletteIconProps>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" clipPath="url(#a)"><path d="M10 19a9 9 0 1 1 0-18c2.387 0 4.676.853 6.364 2.372C18.052 4.892 19 6.952 19 9.1a4.5 4.5 0 0 1-4.5 4.5h-2.025a1.575 1.575 0 0 0-1.26 2.52l.27.36a1.574 1.574 0 0 1-1.26 2.52z"/><path fill="#fff" d="M11.25 5.833a.417.417 0 1 0 0-.833.417.417 0 0 0 0 .833m3.333 3.334a.417.417 0 1 0 0-.834.417.417 0 0 0 0 .834m-9.166 1.666a.417.417 0 1 0 0-.833.417.417 0 0 0 0 .833m1.666-4.166a.417.417 0 1 0 0-.834.417.417 0 0 0 0 .834"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
    </svg>
  )
);

PaletteIcon.displayName = "PaletteIcon";
export default React.memo(PaletteIcon);
