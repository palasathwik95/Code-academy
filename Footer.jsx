import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-4 text-primary">Code Academy</h5>
            <p className="mb-3">
              Providing high-quality education for JEE, NEET, and coding aspirants. 
              Join us on our mission to make education accessible to all.
            </p>
            <div className="d-flex gap-3">
              <a href="https://youtube.com" target="_blank" rel="noopener" className="text-light fs-5">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener" className="text-light fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" className="text-light fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener" className="text-light fs-5">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </Col>
          
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-light">Home</Link></li>
              <li className="mb-2"><Link to="/courses" className="text-light">Courses</Link></li>
              <li className="mb-2"><Link to="/about" className="text-light">About Us</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-light">Contact</Link></li>
            </ul>
          </Col>
          
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="mb-4">Course Categories</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/courses/jee" className="text-light">JEE Preparation</Link></li>
              <li className="mb-2"><Link to="/courses/neet" className="text-light">NEET Preparation</Link></li>
              <li className="mb-2"><Link to="/courses/coding" className="text-light">Coding Courses</Link></li>
            </ul>
          </Col>
          
          <Col md={3}>
            <h5 className="mb-4">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i> 123 Education Lane, Learning City
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i> (123) 456-7890
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i> info@codeacademy.com
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {currentYear} Code Academy. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer