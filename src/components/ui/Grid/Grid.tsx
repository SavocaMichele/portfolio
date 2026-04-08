import styles from "./Grid.module.scss";
import clsx from "clsx";
import React from "react";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    gap?: "xs" | "sm" | "md" | "lg" | "xl";
    columns?: number;
    width?: "full" | "grow" | "auto";
}

const Grid = ({
    className,
    gap,
    columns,
    children,
    style,
    width,
    ...props
}: GridProps) => {

    const gridStyles: React.CSSProperties & {"--grid-template-columns"?: string} = {
        "--grid-template-columns": columns ? `repeat(${columns}, 1fr)` : undefined,
    };

    return (
        <div
            {...props}
            style={{...gridStyles, ...style}}
            className={clsx(
                styles.Grid,
                gap && styles[`--gap-${gap}`],
                width && styles[`--width-${width}`],
                className
            )}
        >
            {children}
        </div>
    )
}

export default Grid;