import styles from "./Typo.module.scss";
import clsx from "clsx";
import React from "react";


interface TypoProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: "primary" | "secondary" | "tertiary" | "light" | "inverted";
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "5xl" | "7xl";
    weight?: "light" | "normal" | "semibold" | "bold";
    align?: "left" | "center" | "right";
    transform?: "uppercase" | "lowercase" | "capitalize";
    children?: React.ReactNode;

    as?: React.ElementType;
}

const Typo = ({
    color,
    size,
    weight,
    align,
    transform,
    children,
    className,
    as,
    ...props
}: TypoProps) => {

    const Component = as || "span";

    return (
        <Component
            className={clsx(
                styles.Typo,
                color && styles[`--color-${color}`],
                size && styles[`--size-${size}`],
                weight && styles[`--weight-${weight}`],
                align && styles[`--align-${align}`],
                transform && styles[`--transform-${transform}`],
                props.onClick && styles["--clickable"],
                className
            )}
            {...props}
        >
                {children}
        </Component>
    );
}

export default Typo;
