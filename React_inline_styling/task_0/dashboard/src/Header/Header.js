import logo from "../assets/holberton-logo.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <img src={logo} className="Header-logo" alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
