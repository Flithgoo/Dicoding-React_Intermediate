import { Link } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";
import { BiSolidFileArchive } from "react-icons/bi";
import { AiFillFileAdd } from "react-icons/ai";


function NotesHeader() {
  const linkStyle = {
    textDecoration: "none",
    color: 'black',

  };

  return (
    <header className="mb-5">
      <nav className="navbar fixed-top navbar-expand-sm navbar-light" id="neubar">
        <div className="container">
          <a className="navbar-brand lh-lg fs-3" href="/"><b>Catatan Pribadi</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse fs-3" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto p-1">
              <li className="nav-item mx-auto">
                <Link to={"/"} style={linkStyle}><IoHomeSharp /></Link>
              </li>
              <li className="nav-item mx-auto p-1">
                <Link to={"/archieve"} style={linkStyle}><BiSolidFileArchive /></Link>
              </li>
              <li className="nav-item mx-auto p-1">
                <Link to={"/add"} style={linkStyle}><AiFillFileAdd /></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NotesHeader;