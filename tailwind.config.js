module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.liquid",
    "./src/**/*.md",
    "./src/_tailwind/style.css",
  ],
  plugins: [
	  require('@tailwindcss/line-clamp'),
  ],
  theme: {
    extend: {
      colors: {
        theme: {
	  DEFAULT: "rgb(107, 163, 34)",
	  dark: "rgb(82,112,42)",
	  light: "rgb(156,184,119)",
	  100: "rgb(156,184,119)",
	  200: "rgb(156,184,119)",
	  300: "rgb(156,184,119)",
	  400: "rgb(116,150,71)",
	  500: "rgb(156,184,119)",
	  600: "rgb(108,148,56)",
	  700: "rgb(82,112,42)",
	  800: "rgb(80,110,41)",
	  900: "rgb(69,97,32)",
	}
      },
    },
  },
};
