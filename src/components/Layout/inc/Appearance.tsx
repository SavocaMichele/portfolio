"use client";

import styles from "./../Layout.module.scss";
import {Icon} from "@/components/ui/Icon/Icon";
import {useAppearance} from "@/hooks/useAppearance";
import {IconName} from "@/components/ui/Icon/iconNames";

const Appearance = () => {

    const {resolved, setAppearance} = useAppearance();
    const state = {
        light: {icon: "Sun", next: "dark"},
        dark: {icon: "Moon", next: "light"},
    }[resolved];

    return (
        <button
            aria-label="Toggle dark mode"
            aria-pressed="false"
            className={styles.Appearance}
            onClick={() => setAppearance(state.next as "dark" | "light")}
        >
            <Icon icon={state.icon as IconName} size={"sm"} color={"secondary"} />
        </button>
    )
}

export default Appearance;