import styles from "./Box.module.scss";
import type { FlexProps } from "@/types"
import clsx from "clsx";
import React from "react";

interface BoxProps extends FlexProps {
    variant?:   "secondary";
    inset?:     "xs" | "sm" | "md" | "lg" | "xl";
    ref?:       React.Ref<HTMLDivElement>;
    as?:        React.ElementType;
    radius?:    "none" | "xs" | "sm" | "md" | "lg" | "full";
    squish?:    boolean;
}


/**
 * __Box Component__
 *
 * The Box component can be used to wrap and style content in various ways.
 * It supports different layout options such as flexbox properties, padding, and variants for styling.
 *
 * @param children
 * @param props
 * @constructor
 *
 * @author Michele Savoca
 */
const Box = ({children, ...props}: BoxProps) => {
    const { variant,
        justifyContent,
        alignItems,
        flexDirection,
        gap,
        wrap,
        width,
        height,
        inset,
        as,
        className,
        squish,
        radius,
        ...rest
    } = props;

    const Component = as || "div";

    return (
        <Component
            {...rest}
            className={clsx(
                styles.Box,
                variant && styles[`--variant-${variant}`],
                justifyContent && styles[`--justify-${justifyContent}`],
                alignItems && styles[`--align-${alignItems}`],
                flexDirection && styles[`--direction-${flexDirection}`],
                gap && styles[`--gap-${gap}`],
                wrap && styles["--wrap"],
                width && styles[`--width-${width}`],
                height && styles[`--height-${height}`],
                inset && styles[`--inset-${inset}`],
                squish && styles["--squish"],
                radius && styles[`--radius-${radius}`],
                className
            )}
        >
            {children}
        </Component>
    );
}

export default Box;