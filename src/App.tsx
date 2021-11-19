import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
import "./App.css";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
    <TopBar />
    <div className="container">
      <Sidebar />
      <Home />
    </div>
    </>
  );
};

export default App;
