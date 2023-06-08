import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Router/Routing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen min-w-screen bg-gray-main dark:bg-soft-dark  ">
          <div className="dark:text-white">
            <Routing />
          </div>
        </div>
        <ToastContainer className={"mt-20"} closeButton={false} />
      </BrowserRouter>
    </>
  );
}

export default App;
