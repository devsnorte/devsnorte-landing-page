import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

const defaultContextValue: ThemeContextType = {
    theme: "light",
    toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.style.setProperty("--foreground-rgb", "255, 255, 255");
            root.style.setProperty("--background-start-rgb", "0, 0, 0");
            root.style.setProperty("--background-end-rgb", "0, 0, 0");
        } else {
            root.style.setProperty("--foreground-rgb", "0, 0, 0");
            root.style.setProperty("--background-start-rgb", "214, 219, 220");
            root.style.setProperty("--background-end-rgb", "255, 255, 255");
        }
    }, [theme]);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as Theme;
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
