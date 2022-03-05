import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <center>
        <h1>User Creation Application</h1>
        <div>
          <Link to="/" style={{ margin: "10px 10px" }}>
            Home
          </Link>
          <Link to="/add-user" style={{ margin: "10px 10px" }}>
            Create User
          </Link>
          <Link to="/users" style={{ margin: "10px 10px" }}>
            Display All Users
          </Link>
        </div>
      </center>
    </nav>
  );
};

export default NavBar;
