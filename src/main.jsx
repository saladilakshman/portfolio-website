import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Helmet } from "react-helmet";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Helmet>
      <meta name="theme-color" content="#9c27b0" />
      <title>lakshmanjs.vercel.app</title>
    </Helmet>
    <App />
  </>
);
