import logo from "./logo.jpg";
import "./App.css";
import { getFooterCopy, getFullYear } from "./utils.js";

function App() {
  return (
    <div className="App-wrapper">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">School dashboard</h1>
      </header>
      <body className="App-body">
        <p className="App-body-text">Login to access the full dashboard</p>

        <div className="App-body-login">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />

          <button>OK</button>
        </div>
      </body>
      <footer className="App-footer">
        <p className="App-footer-text">
          {getFooterCopy()} Copyright {getFullYear()} - holberton School
        </p>
      </footer>
    </div>
  );
}

export default App;
