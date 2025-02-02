import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import { ParallaxProvider } from "react-scroll-parallax";

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
          <ParallaxProvider >
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
          </PersistGate>
          </ParallaxProvider>
          <Toaster />
        </div>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
