import type {MetadataRoute} from "next";
import {siteUrl, socialImagePath} from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: siteUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
			images: [socialImagePath],
		},
	];
}

