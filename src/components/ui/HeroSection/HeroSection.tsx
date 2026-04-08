import styles from "./HeroSection.module.scss";
import React from "react";
import clsx from "clsx";


interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "spark" | "edge";
    align?: "top" | "center";
    as?: React.ElementType;
}

const HeroSection = ({
    children,
    as,
    align,
    variant,
    className,
    ...props
}: HeroSectionProps) => {

    const Component = as || "section";

    return (
        <Component
            className={clsx(
                styles.HeroSection,
                align && styles[`--align-${align}`],
                variant && styles[`--variant-${variant}`],
                className
            )}
            {...props}
        >
            <div className={styles.Content}>
                {children}
            </div>
        </Component>
    )
}

export default HeroSection;