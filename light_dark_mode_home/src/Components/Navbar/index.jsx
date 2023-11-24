import React from "react";
import "./index.css";
import useLightDarkMode from "../../Hooks/UseLightDarkMode";

function Navbar({ navViewer }) {
  const { isopen, setIsopen } = navViewer;
  const { IsDark, ChangeTheme } = useLightDarkMode();

  return (
    <>
      <nav>
        <div className="navinner">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
              alt=""
            />
          </div>
          <div className="navtext">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Faq</li>
              <li>Blog</li>
            </ul>
            <i
              className={`fa-solid ${IsDark ? "fa-sun" : "fa-moon"}`}
              onClick={ChangeTheme}
            ></i>
            <i
              onClick={() => setIsopen(!isopen)}
              class="fa-solid fa-basket-shopping"
            ></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
