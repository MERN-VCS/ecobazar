import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SHOP_CONTEXT_PROVIDER } from "./context/shopContext.jsx";

createRoot(document.getElementById("root")).render(
  <SHOP_CONTEXT_PROVIDER>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SHOP_CONTEXT_PROVIDER>
);
