import * as React from "react";

export type ArrowRightIconProps = React.SVGProps<SVGSVGElement>;

const ArrowRightIcon = React.forwardRef<SVGSVGElement, ArrowRightIconProps>(
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
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" clipPath="url(#a)"><path d="M1 10h18m-9-9 9 9-9 9"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
    </svg>
  )
);

ArrowRightIcon.displayName = "ArrowRightIcon";
export default React.memo(ArrowRightIcon);
