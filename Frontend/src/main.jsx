import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import StoreContext from "./components/context/StoreContext.jsx";
import { ToastContainer, Flip } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StoreContext>
    <SkeletonTheme baseColor="#EEEEEE" highlightColor="#525252">
      <Router>
        <App />
      </Router>
    </SkeletonTheme>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Flip}
    />
  </StoreContext>
);
