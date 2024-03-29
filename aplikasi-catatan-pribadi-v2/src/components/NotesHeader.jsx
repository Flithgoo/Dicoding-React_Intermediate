import { useContext } from "react";
import { bool, func, string } from "prop-types";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import { BiSolidFileArchive } from "react-icons/bi";
import { AiFillFileAdd } from "react-icons/ai";
import { IoLogOutSharp } from "react-icons/io5";
import { FaLanguage } from "react-icons/fa6";
import { IoMdMoon } from "react-icons/io";
import { HiSun } from "react-icons/hi";
import ThemeContext from "../contexts/ThemeContext";

function NotesHeader({ logout, name, isAuth = true }) {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  const iconStyle = {
    transition: "transform 0.3s ease-in-out",
  };

  const { locale, toggleLocale } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (isAuth) {
    return (
      <header className="mb-5">
        <nav
          className="navbar fixed-top navbar-expand-sm navbar-light"
          id="neubar"
        >
          <div className="container">
            <Link to={"/"} className="lh-lg fs-3" style={linkStyle}>
              <b>{name}</b>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className=" collapse navbar-collapse fs-3"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav ms-auto p-1">
                <li className="nav-item mx-auto p-1">
                  <Link style={linkStyle} onClick={toggleLocale}>
                    <span className="fs-5 fw-bold">
                      {locale === "id" ? "en" : "id"}
                    </span>{" "}
                    <FaLanguage />
                  </Link>
                </li>
                <li className="nav-item mx-auto p-1">
                  <Link to={"/archieve"} style={linkStyle}>
                    <BiSolidFileArchive />
                  </Link>
                </li>
                <li className="nav-item mx-auto p-1">
                  <Link to={"/add"} style={linkStyle}>
                    <AiFillFileAdd />
                  </Link>
                </li>
                <li className="nav-item mx-auto p-1">
                  <Link onClick={toggleTheme} style={linkStyle}>
                    {theme === "dark" ? (
                      <HiSun style={iconStyle} />
                    ) : (
                      <IoMdMoon style={iconStyle} />
                    )}
                  </Link>
                </li>

                <li className="nav-item mx-auto ps-1 pb-1">
                  <div style={linkStyle}>
                    <a
                      onClick={logout}
                      className="btn btn-outline-dark rounded-pill mt-2 fw-bold border-2"
                    >
                      {locale === "id" ? "Keluar" : "Logout"} <IoLogOutSharp />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <header className="mb-5">
        <nav
          className="navbar fixed-top navbar-expand-sm navbar-light"
          id="neubar"
        >
          <div className="container">
            <a className="navbar-brand lh-lg fs-3" href="/">
              <b>{locale === "id" ? "Aplikasi catatan" : "Notes App"}</b>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className=" collapse navbar-collapse fs-3"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav ms-auto p-1">
                <li className="nav-item mx-auto p-1">
                  <Link style={linkStyle} onClick={toggleLocale}>
                    <span className="fs-5 fw-bold">
                      {locale === "id" ? "en" : "id"}
                    </span>{" "}
                    <FaLanguage />
                  </Link>
                </li>
                <li className="nav-item mx-auto p-1">
                  <Link onClick={toggleTheme} style={linkStyle}>
                    {theme === "dark" ? (
                      <HiSun style={iconStyle} />
                    ) : (
                      <IoMdMoon style={iconStyle} />
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

NotesHeader.propTypes = {
  logout: func,
  name: string,
  isAuth: bool,
};

export default NotesHeader;
