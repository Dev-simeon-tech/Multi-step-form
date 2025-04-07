import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { FormIndexProvider } from "./context/form-index.context";
import { FormDetailsProvider } from "./context/form-details.context.tsx";
import { PriceContextProvider } from "./context/toggle-price.context.tsx";
import { FormOptionsContextProvider } from "./context/form-options.context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormIndexProvider>
      <FormDetailsProvider>
        <PriceContextProvider>
          <FormOptionsContextProvider>
            <App />
          </FormOptionsContextProvider>
        </PriceContextProvider>
      </FormDetailsProvider>
    </FormIndexProvider>
  </StrictMode>
);
