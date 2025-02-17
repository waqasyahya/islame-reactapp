import { useState } from "react";
import "../assets/style/Header.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Offcanvas,
  Button,
} from "react-bootstrap";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container
          fluid
          className="d-flex align-items-center justify-content-between"
        >
          {/* Left button for triggering Offcanvas */}
          <div className="d-flex align-items-center">
            <Button variant="link" onClick={handleShow} className="ms-1">
              <FaBars size={30} /> {/* Hamburger icon */}
            </Button>

            <img
              className="ms-2 mb-0"
              style={{ width: "45px", height: "45px" }}
              src="/src/assets/image/WIthColor_logo.png"
              alt=""
            />
          </div>

          {/* Centered Navbar Links */}
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="d-none d-lg-flex justify-content-center w-100"
          >
            <Nav>
              <Nav.Link href="#features">Features</Nav.Link>

              <NavDropdown
                title="Learn"
                id="collapsible-nav-dropdown"
                noCaret
                className="dropdown-hover"
              >
                <NavDropdown.Item href="#action/3.1">Learn</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#pricing">Teach</Nav.Link>
              <NavDropdown
                title="Company"
                id="collapsible-nav-dropdown"
                noCaret
                className="dropdown-hover"
              >
                <NavDropdown.Item href="#action/3.1">Company</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          {/* Right button */}
          <Nav>
            <Button variant="link" className="ms-auto  d-lg-block">
              Waqas
            </Button>{" "}
            {/* Only show on large screens */}
          </Nav>
        </Container>
      </Navbar>

      {/* Offcanvas Menu for small screens */}
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Learn</Nav.Link>
            <Nav.Link href="#deets">Teach</Nav.Link>
            <Nav.Link href="#memes">Company</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
