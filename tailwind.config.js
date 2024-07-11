let colors = require("tailwindcss/colors");

module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: colors.slate,
				brand: {
					1: "#CCFFE1",
					2: "#964",
					3: "#a75",
					4: "#138",
				},
			},
		},
	},
	plugins: [],
};
