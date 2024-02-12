import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";
import { NavDropdown } from "../../imports";
import { useContext } from "react";
import { Store } from "../../Store";
import { Button } from "bootstrap";
import { USER_SIGNOUT } from "../../actions";
import { Badge } from "react-bootstrap";

const Header = () => {
  const { state,dispatch:ctxDispatch } = useContext(Store);
  const { userInfo,cart } = state;
  const { cartItems } = cart;
  const navigate=useNavigate();
  const location=useLocation();
  const signOutHandler=()=>{
    ctxDispatch({type:USER_SIGNOUT});
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
  }
  return (
    <header>
      <NavBar bg="dark" variant="dark">
        <Container>
        <Link onClick={() => navigate(-1)}>
                            {location.pathname !== '/' && <i className="fa fa-arrow-left fa-2x  text-white align-arrow-right"> </i> }
          </Link>
          <LinkContainer to="/">
            <NavBar.Brand>
              <img
                src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695"
                width={80}
                alt="Amazon logo"
              />
            </NavBar.Brand>
          </LinkContainer>
          <SearchBox />
          <nav className="d-flex align-items-center justify-content-end me-2 ms-4">
            <Link to="/cart" className="nav-link">
              <i className="fa fa-shopping-cart text-white"></i>
              {cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
          </nav>
          {userInfo ? (
            <NavDropdown className="text-white" title={userInfo.name}>
              <NavDropdown.Divider />
              <Link to="#signout" onClick ={signOutHandler}className="dropdown item">
                Sign out
              </Link>
            </NavDropdown>
          ) : (
            
            <Link to="/signin" className="text-white nav-link">
              Sign in
            </Link>
          )}
        </Container>
      </NavBar>
    </header>
  );
};

export default Header;
