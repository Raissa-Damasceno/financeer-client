import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";



function Navbar() {
  // Get the value from the context
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <>


      <ProSidebar>
        <Menu iconShape="square">
          {isLoggedIn && (
            <>
              <MenuItem>
                {" "}
                <Link to="/expenses">Expenses</Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link to="/income">Income</Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link to="/investments">Investments</Link>
              </MenuItem>

              <MenuItem>
                {" "}
                <Link to="/profile">Profile</Link>
              </MenuItem>
              <br />
              {user && <button onClick={logOutUser}>Logout</button>}
            </>
          )}

          {!isLoggedIn && (
            <>
              <MenuItem>
                {" "}
                <Link to="/">Home</Link>
              </MenuItem>

              <MenuItem>
                {" "}
                <Link to="/signup">Sign Up</Link>
              </MenuItem>

              <MenuItem>
                {" "}
                <Link to="/login">Login</Link>
              </MenuItem>

              <MenuItem>Dashboard</MenuItem>
            </>
          )}
        </Menu>
      </ProSidebar>
    </>
  );
}

export default Navbar;
