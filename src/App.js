import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/home/Home";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <TopBar/>
      <div className="container">
        <SideBar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
