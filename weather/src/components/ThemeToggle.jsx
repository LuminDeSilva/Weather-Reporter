import useDarkMode from "../hooks/useDarkMode";

export default function ThemeToggle() {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <button className="btn btn-outline-secondary" onClick={toggleTheme}>
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}