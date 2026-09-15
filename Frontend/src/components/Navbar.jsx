
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-white">
      <div className="container">

        <Link to="/" className="navbar-brand">
          <img
            src="https://imgs.search.brave.com/mqseTMsbjhK5gHGNl1aRGc-QxCJw2A8FPCBqxMfMuLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9tZWV0dXAtbG9n/by0xLnBuZw"
            alt="Meetup Logo"
            style={{
              height: "35px",
                width: "auto",
                
            }}
          />
        </Link>
            <hr />
        {/* <Link to="/" className="btn btn-light">
          Home
        </Link> */}

      </div>
    </nav>
  );
}

export default Navbar;

