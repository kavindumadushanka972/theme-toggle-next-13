"use client";
import React, { useState, useEffect } from "react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { Sun, Moon } from "react-feather";

export default function Home() {
  // Keeps the state of the theme
  const [themeState, setThemeState] = useState("light");

  // light/dark themes related styles css files
  const themes = {
    dark: `dark-theme.css`,
    light: `light-theme.css`,
  };

  /**
   * Gets the theme state on iniaial load
   * stored in localStorage or if not, set default theme as light theme
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentTheme = localStorage.getItem("theme") || "light"; // get the user theme state from localStorage
      setThemeState(currentTheme);
    }
  }, []);

  /**
   * Toggles the theme and keep it in localStorage
   */
  const toggleTheme = () => {
    if (themeState === "dark") {
      localStorage.setItem("theme", "light");
      setThemeState("light");
    } else {
      localStorage.setItem("theme", "dark");
      setThemeState("dark");
    }
  };

  return (
    <ThemeSwitcherProvider themeMap={themes} defaultTheme={themeState}>
      <div className="center">
        {themeState === "light" && (
          <Sun
            size={20}
            color="black"
            style={{ cursor: "pointer" }}
            onClick={toggleTheme}
          />
        )}

        {themeState === "dark" && (
          <Moon
            size={20}
            color="white"
            style={{ cursor: "pointer" }}
            onClick={toggleTheme}
          />
        )}
      </div>
    </ThemeSwitcherProvider>
  );
}
