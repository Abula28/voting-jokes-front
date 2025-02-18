import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/scss/global.scss";
import App from "./App.tsx";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const query = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={query}>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </QueryClientProvider>
  </StrictMode>
);
