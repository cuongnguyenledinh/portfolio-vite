import reactLogo from "../../assets/react.svg";
import "./nav-bar.css";

const NavBar = () => {
  return (
    <nav className="container">
      <a href="https://react.dev" target="_blank" className="nav_a">
        <img src={reactLogo} className="logo react_2" alt="React logo" />

        <h2>cuongnguyen.dev</h2>
      </a>

      <ul>
        <li>
          <a href="#hero">Hero</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
