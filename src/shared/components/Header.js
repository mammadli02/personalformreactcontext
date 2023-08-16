import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useGlobalState } from "../provider/GlobalProvider/useGlobalState";
import { Badge, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const {
    state: { people },
  } = useGlobalState();

  return (
    <Navbar variant="dark" expand="lg" sticky="top"  className="p-4" style={{backgroundColor:"orange"}}>
      <Container>
        <Navbar.Brand onClick={() => navigate("/home")}>
          Personal App
        </Navbar.Brand>
        <div className="d-flex gap-4">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
             
              <Link className="nav-link" to="/home">
                Home{" "}
                {people.length ? (
                  <Badge className="text-dark" bg="warning">
                    {people.length+1}
                  </Badge>
                ) : (
                  ""
                )}
              </Link>
          <Link  className="nav-link" to="/create">Create</Link>
            </Nav>
          </Navbar.Collapse>
         
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
