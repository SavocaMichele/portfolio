import * as React from "react";

export type MenuIconProps = React.SVGProps<SVGSVGElement>;

const MenuIcon = React.forwardRef<SVGSVGElement, MenuIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M1 2h18M1 10h18M1 18h18"/>
    </svg>
  )
);

MenuIcon.displayName = "MenuIcon";
export default React.memo(MenuIcon);
