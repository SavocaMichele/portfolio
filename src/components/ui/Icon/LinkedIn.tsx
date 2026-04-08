import * as React from "react";

export type LinkedInIconProps = React.SVGProps<SVGSVGElement>;

const LinkedInIcon = React.forwardRef<SVGSVGElement, LinkedInIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M13.5 6.083a5.48 5.48 0 0 1 3.89 1.623A5.56 5.56 0 0 1 19 11.622v6.461h-3.667v-6.461c0-.49-.193-.96-.537-1.306a1.827 1.827 0 0 0-2.592 0 1.85 1.85 0 0 0-.537 1.306v6.461H8v-6.461c0-1.47.58-2.878 1.61-3.916a5.48 5.48 0 0 1 3.89-1.623m-8.5 1H1v11h4zm-2-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
    </svg>
  )
);

LinkedInIcon.displayName = "LinkedInIcon";
export default React.memo(LinkedInIcon);
