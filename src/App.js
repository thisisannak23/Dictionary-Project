import logo from "./orangeIcon.png";
import Dictionary from "./dictionary.js";
import "./App.css";

export default function App() {
  return (
    <div className="App text-center">
      <div className="container">
        <header className="App-header d-block">
          <img
            src={logo}
            className="App-logo "
            width="100px"
            alt="Orange Dot Logo"
          />
        </header>
        <main>
          <Dictionary />
        </main>
        <small className="credit bg-info">Coded by Anna</small>
      </div>
    </div>
  );
}
