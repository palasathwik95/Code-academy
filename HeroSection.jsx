import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

function HeroSection() {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col md={8} lg={6} className="hero-content">
            <h1 className="hero-title">
              Learn from Expert Educators
            </h1>
            <p className="lead mb-4">
              Join Code Academy for comprehensive courses in JEE, NEET preparation and professional coding. 
              High-quality video lessons that help you achieve your academic and career goals.
            </p>
            <div className="d-flex gap-3">
              <Button 
                as={Link} 
                to="/courses" 
                variant="primary" 
                size="lg" 
                className="px-4"
              >
                Explore Courses
              </Button>
              <Button 
                as={Link} 
                to="/about" 
                variant="outline-light" 
                size="lg" 
                className="px-4"
              >
                About Us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection