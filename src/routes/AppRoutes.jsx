import React from "react"
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Hero from "../pages/Hero";
import Information from "../pages/Information";
import Design from "../pages/Design";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function AppRoutes({ theme, setTheme }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout
            theme={theme}
            setTheme={setTheme}
          />
        }
      >
        <Route index element={<Hero />} />
        <Route path="/information" element={<Information />} />
        <Route path="/design" element={<Design />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}