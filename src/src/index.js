import React from "react";
import ReactDomClient from "react-dom/client";
import App from "./App";

const root = ReactDomClient.createRoot(document.getElementById("root"));
root.render(<App />);
