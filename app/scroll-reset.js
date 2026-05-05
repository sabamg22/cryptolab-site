"use client";
import { useEffect } from "react";

export default function ScrollReset() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";

    // Delay scroll reset so navbar can calculate shrinking correctly
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    });
  }, []);

  return null;
}