import React,{ useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("nmc-theme") || "classic"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("nmc-theme", theme);
  }, [theme]);

  return (
    <AppRoutes
      theme={theme}
      setTheme={setTheme}
    />
  );
}
