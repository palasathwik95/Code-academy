import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap'

function Header() {
  const [expanded, setExpanded] = useState(false)

  const closeNavbar = () => {
    setExpanded(false)
  }

  return (
    <Navbar 
      bg="white" 
      expand="lg" 
      sticky="top" 
      className="shadow-sm py-3"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={closeNavbar}>
          <span className="fw-bold text-primary">Code Academy</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" onClick={closeNavbar}>Home</Nav.Link>
            
            <NavDropdown title="Courses" id="courses-dropdown">
              <NavDropdown.Item as={NavLink} to="/courses/jee" onClick={closeNavbar}>
                JEE Courses
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/courses/neet" onClick={closeNavbar}>
                NEET Courses
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/courses/coding" onClick={closeNavbar}>
                Coding Courses
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/courses" onClick={closeNavbar}>
                All Courses
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link as={NavLink} to="/about" onClick={closeNavbar}>About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={closeNavbar}>Contact</Nav.Link>
          </Nav>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search courses..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header