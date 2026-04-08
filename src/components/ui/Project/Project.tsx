import styles from "./Project.module.scss";
import Box from "@/components/ui/Box/Box";
import React from "react";
import Stack from "@/components/ui/Stack/Stack";
import Typo from "@/components/ui/Typo/Typo";
import {Icon} from "@/components/ui/Icon/Icon";
import type {Project} from "@/types";
import clsx from "clsx";
import Link from "next/link";

const Project = ({project, index}: {project: Project, index: number}) => {
    return (
        <Box
            aria-labelledby={`project-${index}`}
            as={"article"}
            inset={"lg"}
            gap={"lg"}
            width={"full"}
            flexDirection={"column"}
            className={clsx(
                styles.Project,
                "animate-on-scroll",
                "animation-fade-up-large-scroll"
            )}
            style={{animationDelay: `${index * 300}ms`}}
        >
            <Stack alignItems={"center"} justifyContent={"space-between"} gap={"xl"} width={"full"} className={styles.Description}>
                <header>
                    <Stack flexDirection={"column"} gap={"xs"}>
                        <Typo size={"4xl"} weight={"bold"} color={"secondary"} as={"h3"} id={`project-${index}`}>{project.name}</Typo>
                        <Typo as={"p"}>{project.description}</Typo>
                    </Stack>
                </header>

                {(project.github || project.live) && (
                    <Stack alignItems={"center"} gap={"xs"}>
                        {project.github && (
                            <Link href={project.github} target={"_blank"} className={styles.IconLink} aria-label="View project on GitHub">
                                <Icon icon={"Github"} />
                            </Link>
                        )}

                        {project.live && (
                            <Link href={project.live} target={"_blank"} className={styles.IconLink} aria-label="Open live demo">
                                <Icon icon={"Link"} />
                            </Link>
                        )}
                    </Stack>
                )}
            </Stack>

            {project.image
                ? (<img src={project.image} alt={project.name} className={styles.Image} />)
                : (<div className={styles.Image}></div>)
            }

            <Stack alignItems={"center"} justifyContent={"space-between"} width={"full"} gap={"md"} wrap>
                <Stack alignItems={"center"} gap={"xs"} as={"ul"} wrap>
                    {project.stack.map((tech, index) => (
                        <Box key={index} inset={"sm"} as={"li"} squish>
                            <Typo size={"xs"}>{tech}</Typo>
                        </Box>
                    ))}
                </Stack>

                <Typo color={"light"} size={"xs"}>{project.category}</Typo>
            </Stack>
        </Box>
    )
}

export default Project;