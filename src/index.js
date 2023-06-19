import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Noi dung cua lesson-${id}`,
      })
    );
  }, 2000);
}
emitComment(1);
emitComment(2);
emitComment(3);
root.render(<App />);
