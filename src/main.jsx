import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// eslint-disable-next-line react-refresh/only-export-components
const App = lazy(() => import("./App.jsx"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Helmet>
      <meta name="theme-color" content="#9c27b0" />
      <title>lakshmanjs.vercel.app</title>
    </Helmet>
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", // This makes the div take up the full viewport height
            width: "100vw", // Optional: ensures the div takes the full width as well
            position: "absolute", // Ensures it's positioned absolutely within the viewport
            top: 0, // Aligns it to the top of the viewport
            left: 0, // Aligns it to the left of the viewport
          }}
        >
          <CircularProgress />
        </div>
      }
    >
      <App />
    </Suspense>
  </>
);
