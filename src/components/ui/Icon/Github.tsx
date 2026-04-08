import * as React from "react";

export type GithubIconProps = React.SVGProps<SVGSVGElement>;

const GithubIcon = React.forwardRef<SVGSVGElement, GithubIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M12.793 19v-3.6a4.4 4.4 0 0 0-.874-3.15c2.621 0 5.243-1.8 5.243-4.95a4.97 4.97 0 0 0-.874-3.15 6.85 6.85 0 0 0 0-3.15s-.874 0-2.622 1.35a18.3 18.3 0 0 0-6.99 0C4.93 1 4.056 1 4.056 1a6.4 6.4 0 0 0 0 3.15A4.97 4.97 0 0 0 3.18 7.3c0 3.15 2.622 4.95 5.243 4.95a4.3 4.3 0 0 0-.743 1.485 4.5 4.5 0 0 0-.13 1.665V19"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M7.171 15.563C3.306 17.125 2.886 14 1.171 14"/>
    </svg>
  )
);

GithubIcon.displayName = "GithubIcon";
export default React.memo(GithubIcon);
