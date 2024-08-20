import logo from "./logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App-wrapper">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">School dashboard</h1>
      </header>
      <body className="App-body">
        <p className="App-body-text">Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p className="App-footer-text">Copyright 2024 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
