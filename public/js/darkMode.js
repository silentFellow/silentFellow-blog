// @custom-variant dark (&:where(.dark, .dark *));

const getCurrentTheme = () => localStorage.getItem("theme") ?? "light";

const setTheme = (theme) => {
	document.documentElement.classList.toggle("dark", theme === "dark");
	document.documentElement.classList.toggle("light", theme === "light");
	localStorage.setItem("theme", theme);
};

const toggleTheme = () => {
	document
		.getElementById("theme-toggle-button")
		?.addEventListener("click", () => {
			const next = getCurrentTheme() === "dark" ? "light" : "dark";
			setTheme(next);
		});
};

setTheme(getCurrentTheme());
toggleTheme();
