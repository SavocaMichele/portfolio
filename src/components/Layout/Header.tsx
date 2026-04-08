"use client";

import styles from './Layout.module.scss';
import Typo from "@/components/ui/Typo/Typo";
import Stack from "@/components/ui/Stack/Stack";
import Link from "next/link";
import Appearance from "@/components/Layout/inc/Appearance";
import {MouseEvent, useEffect, useMemo, useState} from "react";
import clsx from "clsx";
import MobileMenu from "@/components/Layout/inc/MobileMenu";

const HEADER_OFFSET = 80;

const navigationItems: {label: string, href: string}[] = [
    {label: "Home", href: "#home"},
    {label: "Projects", href: "#projects"},
    {label: "About", href: "#about"},
    {label: "Contact", href: "#contact"},
] as const;

const Header = () => {
    const sectionIds = useMemo(() => navigationItems.map(({href}) => href.slice(1)), []);
    const [activeHash, setActiveHash] = useState<string>(navigationItems[0].href);

    useEffect(() => {
        const getActiveSection = () => {
            const offsetPosition = window.scrollY + HEADER_OFFSET;
            let currentHash: string = navigationItems[0].href;

            sectionIds.forEach((sectionId) => {
                const section = document.getElementById(sectionId);

                if (!section) {
                    return;
                }

                if (section.offsetTop <= offsetPosition) {
                    currentHash = `#${sectionId}`;
                }
            });

            return currentHash;
        };

        const syncActiveSection = () => {
            const nextHash = getActiveSection();

            setActiveHash(nextHash);

            if (window.location.hash !== nextHash) {
                window.history.replaceState(null, "", nextHash);
            }
        };

        syncActiveSection();

        window.addEventListener("scroll", syncActiveSection, {passive: true});
        window.addEventListener("hashchange", syncActiveSection);

        return () => {
            window.removeEventListener("scroll", syncActiveSection);
            window.removeEventListener("hashchange", syncActiveSection);
        };
    }, [sectionIds]);

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

        setActiveHash(href);
    };

    return (
        <header className={styles.Header} role="banner">
            <Stack
                role={"navigation"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={"lg"}
                className={styles.Navigation}
            >
                <Link
                    href={"#home"}
                    onClick={(event) => handleNavigationClick(event, "#home")}
                >
                    <Typo color={"secondary"} weight={"semibold"}>Portfolio</Typo>
                </Link>

                <Stack alignItems={"center"} justifyContent={"center"} gap={"md"} width={"grow"} as={"nav"} className={styles.Desktop} aria-label="Main navigation">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            scroll={false}
                            onClick={(event) => handleNavigationClick(event, item.href)}
                            aria-current={activeHash === item.href ? "page" : undefined}
                            className={clsx(styles.Link, activeHash === item.href && styles["--active"])}
                        >
                            {item.label}
                        </Link>
                    ))}
                </Stack>

                <Stack alignItems={"center"} gap={"xs"}>
                    <Appearance />
                    <MobileMenu items={navigationItems} />
                </Stack>
            </Stack>
        </header>
    )
}

export default Header;