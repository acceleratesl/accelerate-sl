import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router";

import "./index.css";

import App from "./App.tsx";

import StarField from "./components/StarField/StarField.tsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/accelerate-sl">
      <ScrollToTop />
      <App />
      <StarField />
    </BrowserRouter>
  </StrictMode>
);
