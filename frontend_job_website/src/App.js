import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { LicenseInfo } from "@mui/x-license-pro";
import Router from "./router/Router";
import { ToastContainer } from "react-toastify";
import Socket from "./Components/Test/Socket";

LicenseInfo.setLicenseKey(
  "e0d9bb8070ce0054c9d9ecb6e82cb58fTz0wLEU9MzI0NzIxNDQwMDAwMDAsUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y"
);

function App() {
  return (
    <div className="h-screen overflow-x-hidden">
      {/* <Socket /> */}

      <ToastContainer
        position="bottom-right"
        autoClose={1600}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
