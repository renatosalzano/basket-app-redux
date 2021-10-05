import React from "react";
import Header from "./layout/Header";
import "./styles/layout.scss";
import "./styles/basket.scss";
import Main from "./layout/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
