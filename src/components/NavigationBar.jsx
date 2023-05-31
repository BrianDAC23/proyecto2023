import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../CSS/navbar.css';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleBlur = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      variant="dark"
      expand="md"
      className="navbar"
      onClick={handleClick}
      onBlur={handleBlur}
    >
      <div className="container p-0">
        <Navbar.Brand className="title-logo" href="/">
          Nombre/Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler mx-4" onClick={handleClick}>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="navbar-collapse" expanded={expanded.toString()}>
          <Nav className="ms-auto">
            <div style={{ maxWidth: "fit-content" }}>
              <Nav.Link href="/" className="nav-link-custom">
                Inicio
              </Nav.Link>
            </div>
            <div style={{ maxWidth: "fit-content" }}>
              <Nav.Link href="/post" className="nav-link-custom">
                Publicaciones
              </Nav.Link>
            </div>
            <div style={{ maxWidth: "fit-content" }}>
              <Nav.Link href="/contacto" className="nav-link-custom">
                Contacto
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
