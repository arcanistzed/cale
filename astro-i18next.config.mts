import type { AstroI18nextConfig } from "astro-i18next";

export default {
	defaultLocale: "en",
	locales: ["en", "fr"],
	routes: {
		fr: {
			about: "a-propos",
			team: "equipe",
			sponsors: "commanditaires",
		},
	},
	namespaces: ["common", "home", "about", "team", "sponsors"],
	defaultNamespace: "common",
} satisfies AstroI18nextConfig;
