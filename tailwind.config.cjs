const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#505e3f",
			},
			fontFamily: {
				sans: ["Garet Book", ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				shrink: {
					from: {
						transform: "scaleX(1)",
					},
					to: {
						transform: "scaleX(0)",
						opacity: 0,
					},
				},
				fade: {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				}
			},
		},
	},
	plugins: [require("tailwind-gradient-mask-image")],
};
