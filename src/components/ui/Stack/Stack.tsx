import styles from "./Stack.module.scss";
import type { FlexProps } from "@/types";
import React from "react";
import clsx from "clsx";

interface StackProps extends FlexProps {
    children: React.ReactNode
    as?: React.ElementType;
    className?: string;
}

const Stack = ({children, className, ...props}: StackProps) => {
    const { justifyContent, alignItems, flexDirection, gap, wrap, width, height, as, ...rest } = props;

    const Component = as || "div";

    return (
        <Component
            {...rest}
            className={clsx(
                styles.Stack,
                justifyContent && styles[`--justify-${justifyContent}`],
                alignItems && styles[`--align-${alignItems}`],
                flexDirection && styles[`--direction-${flexDirection}`],
                gap && styles[`--gap-${gap}`],
                wrap && styles["--wrap"],
                width && styles[`--width-${width}`],
                height && styles[`--height-${height}`],
                className
            )}
        >
            {children}
        </Component>
    );
}

export default Stack;
