import Header from "./layout/Header";
import Main from "./layout/Main";
import "./styles/layout.scss";
import "./styles/basket.scss";

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  require("./styles/layout-mobile.scss");
  console.log("mobile");
}

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
