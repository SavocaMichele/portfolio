import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Stack from "@/components/ui/Stack/Stack";
import Box from "@/components/ui/Box/Box";
import Typo from "@/components/ui/Typo/Typo";
import Button from "@/components/ui/Button/Button";
import {Icon} from "@/components/ui/Icon/Icon";
import React, {Fragment} from "react";
import Project from "@/components/ui/Project/Project";
import rawProjects from "@/assets/projects.json";
import rawSkills from "@/assets/skills.json";
import type {Project as ProjectType} from "@/types";
import Grid from "@/components/ui/Grid/Grid";
import Link from "next/link";

const projects  = rawProjects as ProjectType[];
const skills    = rawSkills as string[];

const Page = () => {
    return (
        <Fragment>
            {/* Home */}
            <HeroSection align={"center"} id={"home"} variant={"spark"} aria-labelledby="home-heading">
                <Stack flexDirection={"column"} height={"full"} alignItems={"center"} gap={"xl"} className={"animation-fade-up"}>
                    <Stack flexDirection={"column"} gap={"md"} alignItems={"center"} as={"header"}>
                        <Box inset={"sm"} as={"p"} squish className={"animation-fade-grow animation-delay-200"}>
                            <Typo>Hey, I'm Michele Savoca</Typo>
                        </Box>

                        <Typo
                            as={"h1"}
                            id={"home-heading"}
                            color={"secondary"}
                            size={"7xl"}
                            weight={"bold"}
                            align={"center"}
                            className={"animation-fade-up animation-delay-300"}
                        >
                            Web Developer &<br/>
                            Creative Designer
                        </Typo>

                        <Typo align={"center"} size={"xl"} as={"p"} className={"animation-fade-up animation-delay-400"}>
                            Crafting beautiful, functional web experiences with modern <br />
                            technologies and thoughtful design.
                        </Typo>
                    </Stack>

                    <Button
                        className={"animation-fade-up animation-delay-500"}
                        href={"#projects"}
                        value={"View Projects"}
                        endItem={<Icon icon={"ArrowDown"} size={"sm"} />}
                    />
                </Stack>
            </HeroSection>


            {/* Projects */}
            <HeroSection id={"projects"} aria-labelledby="projects-heading">
                <Stack flexDirection={"column"} alignItems={"center"} gap={"2xl"} width={"full"}>
                    <Stack
                        flexDirection={"column"}
                        alignItems={"center"}
                        gap={"sm"} width={"full"}
                        className={"animate-on-scroll animation-fade-up-scroll animation-delay-300"}
                    >
                        <Typo
                            as={"h2"}
                            id={"projects-heading"}
                            color={"secondary"}
                            size={"5xl"}
                            align={"center"}
                            weight={"bold"}
                        >
                            Featured Projects
                        </Typo>

                        <Typo size={"lg"} as={"p"} align={"center"}>A collection of web projects showcasing modern design and development practices.</Typo>
                    </Stack>

                    <Stack flexDirection={"column"} width={"full"} gap={"lg"}>
                        {projects.map((project, index) => (
                            <Project project={project} index={index} key={index} />
                        ))}
                    </Stack>
                </Stack>
            </HeroSection>


            {/* About */}
            <HeroSection id={"about"} variant={"edge"} align={"center"} aria-labelledby="about-heading">
                <Stack flexDirection={"column"} alignItems={"center"} gap={"2xl"} width={"full"}>
                    <Stack
                        flexDirection={"column"}
                        alignItems={"center"}
                        gap={"sm"}
                        width={"full"}
                        className={"animate-on-scroll animation-fade-up-scroll animation-delay-300"}
                    >
                        <Typo
                            as={"h2"}
                            id={"about-heading"}
                            color={"secondary"}
                            size={"5xl"}
                            align={"center"}
                            weight={"bold"}
                        >
                            About Me
                        </Typo>

                        <Typo size={"lg"} as={"p"} align={"center"}>Passionate about creating digital experiences through code and design.</Typo>
                    </Stack>

                    <Stack flexDirection={"column"} gap={"xl"}>
                        <Grid columns={2} width={"full"} gap={"lg"}>
                            <Box as={"article"} flexDirection={"column"} gap={"sm"} radius={"sm"} className={"animate-on-scroll animation-fade-left-scroll"}>
                                <Typo color={"secondary"} weight={"semibold"} size={"2xl"} as={"h3"}>My Journey</Typo>
                                <Typo as={"p"}>
                                    As a web developer with a passion for clean code and elegant design, I specialize in building modern, responsive applications that solve real problems.
                                    <br />
                                    <br />
                                    My approach combines technical expertise with creative thinking to deliver exceptional user experiences that make a difference.
                                </Typo>
                            </Box>

                            <Box as={"article"} flexDirection={"column"} gap={"sm"} radius={"sm"} className={"animate-on-scroll animation-fade-right-scroll"}>
                                <Typo color={"secondary"} weight={"semibold"} size={"2xl"} as={"h3"}>Skills</Typo>

                                <Stack alignItems={"center"} gap={"xs"} as={"ul"} wrap>
                                    {skills.map((skill, index) => (
                                        <Box as={"li"} key={index} inset={"sm"} radius={"sm"} squish>
                                            <Typo>{skill}</Typo>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid columns={3} width={"full"} gap={"md"}>
                            <Box as={"article"} radius={"sm"} flexDirection={"column"} alignItems={"center"} gap={"sm"} aria-labelledby="dev-heading" className={"animate-on-scroll animation-fade-up-scroll animation-delay-100"}>
                                <Box radius={"full"} inset={"xs"} variant={"secondary"}>
                                    <Icon icon={"Code"} size={"lg"} color={"inverted"} />
                                </Box>

                                <Stack flexDirection={"column"} gap={"xs"} justifyContent={"center"}>
                                    <Typo as={"h3"} id={"dev-heading"} size={"xl"} color={"secondary"} weight={"semibold"} align={"center"}>Development</Typo>
                                    <Typo size={"sm"} align={"center"}>Building robust web applications with modern frameworks and best practices.</Typo>
                                </Stack>
                            </Box>


                            <Box as={"article"} radius={"sm"} flexDirection={"column"} alignItems={"center"} gap={"sm"} aria-labelledby="design-heading" className={"animate-on-scroll animation-fade-up-scroll animation-delay-200"}>
                                <Box radius={"full"} inset={"xs"} variant={"secondary"}>
                                    <Icon icon={"Palette"} size={"lg"} color={"inverted"} />
                                </Box>

                                <Stack flexDirection={"column"} gap={"xs"} justifyContent={"center"}>
                                    <Typo as={"h3"} id={"design-heading"} size={"xl"} color={"secondary"} weight={"semibold"} align={"center"}>Design</Typo>
                                    <Typo size={"sm"} align={"center"}>Creating intuitive user interfaces with attention to detail and aesthetics.</Typo>
                                </Stack>
                            </Box>


                            <Box as={"article"} radius={"sm"} flexDirection={"column"} alignItems={"center"} gap={"sm"} aria-labelledby="performance-heading" className={"animate-on-scroll animation-fade-up-scroll animation-delay-300"}>
                                <Box radius={"full"} inset={"xs"} variant={"secondary"}>
                                    <Icon icon={"Zap"} size={"lg"} color={"inverted"} />
                                </Box>

                                <Stack flexDirection={"column"} gap={"xs"} justifyContent={"center"}>
                                    <Typo as={"h3"} id={"performance-heading"} size={"xl"} color={"secondary"} weight={"semibold"} align={"center"}>Performance</Typo>
                                    <Typo size={"sm"} align={"center"}>Optimizing applications for speed, accessibility, and user experience.</Typo>
                                </Stack>
                            </Box>
                        </Grid>
                    </Stack>
                </Stack>
            </HeroSection>


            {/* Contact */}
            <HeroSection id={"contact"} align={"center"} aria-labelledby="contact-heading">
                <Stack flexDirection={"column"} alignItems={"center"} gap={"2xl"} width={"full"}>
                    <Stack
                        flexDirection={"column"}
                        alignItems={"center"}
                        gap={"sm"}
                        width={"full"}
                        className={"animate-on-scroll animation-fade-up-scroll animation-delay-300"}
                    >
                        <Typo
                            as={"h2"}
                            id={"contact-heading"}
                            color={"secondary"}
                            size={"5xl"}
                            align={"center"}
                            weight={"bold"}
                        >
                            Get in Touch
                        </Typo>

                        <Typo as={"p"} size={"lg"} align={"center"}>I'm always open to new opportunities and collaborations. Feel free to reach out!</Typo>
                    </Stack>

                    <Box
                        width={"full"}
                        radius={"sm"}
                        inset={"lg"}
                        alignItems={"center"}
                        flexDirection={"column"}
                        gap={"md"}
                        className={"animate-on-scroll animation-fade-up-scroll"}
                    >
                        <Stack alignItems={"center"} gap={"sm"}>
                            <Icon icon={"Mail"} size={"lg"} />

                            <address>
                                <Link href={"mailto:michele.savoca@me.com?subject=Job%20Opportunity"}>
                                    <Typo size={"2xl"} color={"secondary"} weight={"semibold"}>michele.savoca@me.com</Typo>
                                </Link>
                            </address>
                        </Stack>

                        <Typo>Whether you have a question, project idea, or just want to say hi, I'll try my best to get back to you!</Typo>

                        <Stack alignItems={"center"} gap={"sm"} as={"nav"} aria-label="Social links">
                            <Link href={"https://github.com/SavocaMichele"} target={"_blank"} aria-label="GitHub profile">
                                <Box inset={"sm"} radius={"sm"}>
                                    <Icon icon={"Github"} color={"secondary"} />
                                </Box>
                            </Link>

                            <Link href={"https://www.linkedin.com/in/michele-savoca-1727a9197/"} target={"_blank"} aria-label="LinkedIn profile">
                                <Box inset={"sm"} radius={"sm"}>
                                    <Icon icon={"LinkedIn"} color={"secondary"} />
                                </Box>
                            </Link>
                        </Stack>
                    </Box>

                    <Typo color={"light"} size={"sm"} as={"p"}>Made with ❤︎ by Michele Savoca.</Typo>
                </Stack>
            </HeroSection>
        </Fragment>
    );
}

export default Page;
