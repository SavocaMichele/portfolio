import * as React from "react";

export type CodeIconProps = React.SVGProps<SVGSVGElement>;

const CodeIcon = React.forwardRef<SVGSVGElement, CodeIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="m13 16 6-6-6-6M7 4l-6 6 6 6"/>
    </svg>
  )
);

CodeIcon.displayName = "CodeIcon";
export default React.memo(CodeIcon);
