import * as React from "react";

export type ArrowUpIconProps = React.SVGProps<SVGSVGElement>;

const ArrowUpIcon = React.forwardRef<SVGSVGElement, ArrowUpIconProps>(
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
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" clipPath="url(#a)"><path d="m1 10 9-9 9 9m-9 9V1"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
    </svg>
  )
);

ArrowUpIcon.displayName = "ArrowUpIcon";
export default React.memo(ArrowUpIcon);
