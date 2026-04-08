import React from "react";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
    justifyContent?:    "center" | "flex-start" | "flex-end" | "space-between" | "space-around"
    alignItems?:        "center" | "flex-start" | "flex-end" | "stretch"
    flexDirection?:     "row" | "column"
    gap?:               "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
    width?:             "full" | "grow" | "auto"
    height?:            "full" | "auto" | "grow"
    wrap?:              boolean
}

export const BREAKPOINTS = {
    mobile:     770,
    tablet:     1024,
    desktop:    1280
} as const;

export type Breakpoint = "mobile" | "tablet" | "desktop"

export interface MediaState {
    breakpoint: Breakpoint
    mobile: boolean
    tablet: boolean
    desktop: boolean
}