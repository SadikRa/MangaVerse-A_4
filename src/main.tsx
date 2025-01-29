import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <div
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <RouterProvider router={router} />
        </div>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
