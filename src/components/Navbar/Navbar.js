import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../context/auth.context';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
    <div className='butNav'>
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Link to="/">
      <Button>Home Page</Button>
      </Link>

      {isLoggedIn && (
        <>
          <Button onClick={logOutUser}>Logout</Button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>

          <Link to="/login">
            <Button>Login</Button>
          </Link>

          <Link tag={Link} to={"/expenses"}>
          <Button>Expenses </Button>
          </Link>

          <Link tag={Link} to={"/income"}>
          <Button>Income </Button>
          </Link>

          <Link to={"/investments"}> 
          <Button>Investments</Button> 
          </Link>

          <Link tag={Link} to={"/charts"}>
          <Button>Charts </Button>
          </Link>

        </>
      )}

      <div className="profile-img-wrapper">
        {user && (
          <Link to="/profile">
            <img className="profile-img" src={user.image} alt="profile" />
          </Link>
        )}
      </div>
      </ButtonGroup>
      </div>
    </nav>
    )
    };


export default Navbar;