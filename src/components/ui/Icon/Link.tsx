import * as React from "react";

export type LinkIconProps = React.SVGProps<SVGSVGElement>;

const LinkIcon = React.forwardRef<SVGSVGElement, LinkIconProps>(
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
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" clipPath="url(#a)"><path d="M19 11v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h6m10 0-9 9m4-9h5v5"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
    </svg>
  )
);

LinkIcon.displayName = "LinkIcon";
export default React.memo(LinkIcon);
