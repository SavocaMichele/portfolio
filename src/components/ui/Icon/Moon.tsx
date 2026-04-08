import * as React from "react";

export type MoonIconProps = React.SVGProps<SVGSVGElement>;

const MoonIcon = React.forwardRef<SVGSVGElement, MoonIconProps>(
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
      <g clipPath="url(#a)"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M19 10.48A9.006 9.006 0 1 1 9.52 1c.405-.021.617.461.402.804a6.004 6.004 0 0 0 8.274 8.274c.344-.215.825-.004.803.401"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
    </svg>
  )
);

MoonIcon.displayName = "MoonIcon";
export default React.memo(MoonIcon);
