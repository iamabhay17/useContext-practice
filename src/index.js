import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import NameContext from "./context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <NameContext>
      <App />
    </NameContext>
  </StrictMode>
);
