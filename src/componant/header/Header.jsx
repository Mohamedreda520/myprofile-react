import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showmodel, Showmodel] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex">
      <button
        onClick={() => {
          Showmodel(true);
        }}
        className="btn btn-dark menu f-3 icon-menu border"
      />
      <div> </div>
      <nav className="border">
        <ul className="flex">
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>

          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          //  ===== save value in localstorage =======
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          // ============  get value from localstorage =========
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="btn btn-dark rounded-circle text-center border"
      >
        {theme === "dark" ? (
          <span className=" f-3 icon-moon-o" />
        ) : (
          <span className=" f-3 icon-sun" />
        )}
      </button>
      {showmodel && (
        <div className="fixed">
          <ul className="popup">
            <li
              onClick={() => {
                Showmodel(false);
              }}
            >
         
              <button className="btn btn-danger border ">
                <div className="icon-close"></div>
              </button>
            </li>
             <li>
             <a href="#about">about</a>
           </li>
           <li>
             <a href="#services">services</a>
           </li>
           <li>
             <a href="#projects">projects</a>
           </li>
 
           <li>
             <a href="#skills">skills</a>
           </li>
           <li>
             <a href="#contact">Contact</a>
           </li>
          </ul>
        </div>
      )}
    </header>
  );
};
export default Header;
