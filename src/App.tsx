import Header from "./layout/Header";
import Main from "./layout/Main";
import "./styles/layout.scss";
import "./styles/basket.scss";
import "./styles/media-query.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
