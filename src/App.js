import React from "react";
import "./App.css";
import Header from "./hearder/Header";
import Sidebar from "./sidebar/Sidebar";
import Feed from "./feed/Feed";
import Widget from "./Widget";
import Login from "./login/Login";
import { useStateValue } from "./backendConnet/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
