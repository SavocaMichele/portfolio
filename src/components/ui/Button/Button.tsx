"use client";

import styles from "./Button.module.scss";
import clsx from "clsx";
import React from "react";
import Link from "next/link";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    type?: "button" | "submit" | "reset" | "none";
    variant?: "primary" | "secondary" | "input";
    size?: "sm" | "md" | "lg";
    width?: "full";
    value: string;

    startItem?: React.ReactNode;
    endItem?: React.ReactNode;
    loading?: boolean;
    disabled?: boolean;

    href?: string;

    onClick?: (e: any) => void;
}

const Button = ({
    type,
    variant,
    size,
    width,
    value,
    startItem,
    endItem,
    loading,
    disabled,
    onClick,
    className,
    ...props
}: ButtonProps) => {
    const Component = props.href ? Link : "button";

    // If props.type === none, stop the button from submitting forms when clicked
    const onButtonClick = (e: any ) => {
        if (type === "none" && !props.href) {
            e.preventDefault();
        }

        onClick && onClick(e);
    }


    return (
        <>
            {/* @ts-ignore */}
            <Component
                {...props}
                onClick={(e) => onButtonClick(e)}
                type={type === "none" ? undefined : type}
                className={clsx(
                    styles.Button,
                    variant && styles[`--variant-${variant}`],
                    size && styles[`--size-${size}`],
                    width && styles[`--width-${width}`],
                    className,
                    (loading || disabled) && styles["--disabled"]
                )}
            >

                {loading && <span className={styles.Spinner}></span>}
                {(startItem && !loading) && startItem}

                <span>{value}</span>

                {(endItem && !loading) && endItem}
            </Component>
        </>
    );
}

export default Button;
