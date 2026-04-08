const FALLBACK_SITE_URL = "https://www.msavoca.dev";

const normalizeSiteUrl = (value?: string) => {
    const trimmedValue = value?.trim();

    if (!trimmedValue) {
        return FALLBACK_SITE_URL;
    }

    if (/^https?:\/\//i.test(trimmedValue)) {
        return trimmedValue;
    }

    return `https://${trimmedValue}`;
};

export const siteName = "Portfolio";
export const siteTitle = "Michele Savoca | Web Developer";
export const siteDescription = "Personal portfolio of Michele Savoca, a passionate web developer specializing in React, Next.js and Laravel. Explore my projects, skills, and experience in building modern web applications.";
export const socialImagePath = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) + "/img/portfolio.png";
export const socialImageAlt = "Preview of Michele Savoca's portfolio website";
export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const siteUrlObject = new URL(siteUrl);

