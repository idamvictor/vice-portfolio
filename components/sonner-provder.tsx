"use client";

import { Toaster } from "sonner";

export function SonnerProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        className: "rounded-md",
        duration: 5000,
      }}
      closeButton
    />
  );
}
