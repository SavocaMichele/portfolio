"use client";

import styles from "./../Layout.module.scss";
import Popover from "@/components/ui/Popover/Popover";
import {Icon} from "@/components/ui/Icon/Icon";
import clsx from "clsx";
import Link from "next/link";
import Stack from "@/components/ui/Stack/Stack";
import React, {MouseEvent} from "react";


interface MobileMenuProps {
    items: {label: string, href: string}[];
}


const HEADER_OFFSET = 60;


const MobileMenu = ({items}: MobileMenuProps) => {
    const [open, setOpen] = React.useState(false);

    const handleNavigationClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
        if (
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey
        ) {
            return;
        }

        event.preventDefault();

        const section = document.getElementById(href.slice(1));

        if (!section) {
            return;
        }

        const top = Math.max(section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET, 0);

        window.history.replaceState(null, "", href);
        window.scrollTo({
            top,
            behavior: "smooth",
        });

        setOpen(false);
    };


    return (
        <Popover open={open} onOpenChange={setOpen}>
            <Popover.Trigger
                aria-label="Toggle dark mode"
                aria-pressed="false"
                className={clsx(styles.Appearance, styles.MobileMenu)}
            >
                <Icon icon={"Menu"} size={"sm"} color={"secondary"} />
            </Popover.Trigger>

            <Popover.Content sideOffset={17} align={"center"}>
                <Stack flexDirection={"column"} justifyContent={"center"} gap={"md"} width={"grow"} as={"nav"} aria-label="Main navigation">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            scroll={false}
                            onClick={(event) => handleNavigationClick(event, item.href)}
                            className={styles.Link}
                        >
                            {item.label}
                        </Link>
                    ))}
                </Stack>
            </Popover.Content>
        </Popover>
    )
}

export default MobileMenu;