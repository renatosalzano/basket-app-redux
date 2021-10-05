import React, { useState } from "react";
import Grocery from "./Grocery";

import Purchased from "./Purchased";

const Main: React.FunctionComponent = () => {
  const [show, setShow] = useState(true);
  return (
    <main>
      <div className="nav-btns">
        <span className={show ? "active" : ""} onClick={() => setShow(true)}>
          Grocery
        </span>
        <span className={!show ? "active" : ""} onClick={() => setShow(false)}>
          Purchased
        </span>
        <span className={`slideblock ${show ? "" : "moved"}`}></span>
      </div>
      {show ? <Grocery /> : <Purchased />}
    </main>
  );
};

export default Main;
