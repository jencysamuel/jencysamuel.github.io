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
	  100: "rgb(176,224,119)",
	  200: "rgb(156,194,119)",
	  300: "rgb(156,184,119)",
	  400: "rgb(116,150,71)",
	  500: "rgb(111,150,59)",
	  600: "rgb(108,148,56)",
	  700: "rgb(82,112,42)",
	  800: "rgb(80,110,41)",
	  900: "rgb(69,97,32)",
	  DEFAULT: "rgb(69,97,32)",
	}
      },
    },
  },
};
