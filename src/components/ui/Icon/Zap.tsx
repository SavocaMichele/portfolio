import * as React from "react";

export type ZapIconProps = React.SVGProps<SVGSVGElement>;

const ZapIcon = React.forwardRef<SVGSVGElement, ZapIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M2.892 11.8a.9.9 0 0 1-.476-.138.9.9 0 0 1-.41-.868.9.9 0 0 1 .193-.461l8.796-9.178a.443.443 0 0 1 .764.414l-1.706 5.417a.91.91 0 0 0 .103.829.89.89 0 0 0 .733.385h6.22a.88.88 0 0 1 .804.512.91.91 0 0 1-.111.955l-8.797 9.178a.44.44 0 0 1-.546.102.45.45 0 0 1-.218-.516l1.706-5.417a.91.91 0 0 0-.103-.829.89.89 0 0 0-.733-.386z"/>
    </svg>
  )
);

ZapIcon.displayName = "ZapIcon";
export default React.memo(ZapIcon);
