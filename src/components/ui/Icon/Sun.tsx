import * as React from "react";

export type SunIconProps = React.SVGProps<SVGSVGElement>;

const SunIcon = React.forwardRef<SVGSVGElement, SunIconProps>(
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
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" clipPath="url(#a)"><path d="M10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-13v2m0 14v2M3 3l1 1m12 12 1 1M1 10h2m14 0h2M4 16l-1 1M17 3l-1 1"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
    </svg>
  )
);

SunIcon.displayName = "SunIcon";
export default React.memo(SunIcon);
