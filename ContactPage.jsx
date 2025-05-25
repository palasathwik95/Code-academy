import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <>
      <div className="page-header">
        <Container>
          <h1 className="display-4">Contact Us</h1>
          <p className="lead">Have questions? We're here to help!</p>
        </Container>
      </div>
      
      <Container className="py-5">
        <Row>
          <Col lg={5} className="mb-4 mb-lg-0">
            <h2 className="mb-4">Get In Touch</h2>
            <p className="mb-4">
              Whether you have a question about our courses, need technical support, or want to 
              partner with us, our team is ready to answer your questions.
            </p>
            
            <div className="mb-4">
              <h5>Email Us</h5>
              <p className="mb-3">
                <i className="bi bi-envelope me-2 text-primary"></i> info@codeacademy.com
              </p>
              <p className="mb-3">
                <i className="bi bi-envelope me-2 text-primary"></i> support@codeacademy.com
              </p>
            </div>
            
            <div className="mb-4">
              <h5>Call Us</h5>
              <p className="mb-3">
                <i className="bi bi-telephone me-2 text-primary"></i> +91 123 456 7890
              </p>
              <p className="mb-3">
                <i className="bi bi-telephone me-2 text-primary"></i> +91 987 654 3210
              </p>
            </div>
            
            <div>
              <h5>Visit Us</h5>
              <p className="mb-3">
                <i className="bi bi-geo-alt me-2 text-primary"></i> 
                123 Education Lane, Learning City, 
                Educational District, 400001
              </p>
            </div>
          </Col>
          
          <Col lg={7}>
            <Card className="contact-form">
              <Card.Body>
                <h3 className="mb-4">Send Us A Message</h3>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Enter your name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control 
                          type="email" 
                          placeholder="Enter your email"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                      type="tel" 
                      placeholder="Enter your phone number"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter subject"
                      required
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5}
                      placeholder="Enter your message"
                      required
                    />
                  </Form.Group>
                  
                  <Button variant="primary" type="submit" size="lg">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col>
            <h3 className="mb-4 text-center">Frequently Asked Questions</h3>
          </Col>
        </Row>
        
        <Row className="mb-4">
          <Col md={6} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <h5>How do I access the course videos?</h5>
                <p className="mb-0">
                  Once you select a course, you'll be redirected to our YouTube channel 
                  where you can watch all the lessons. You can also access the course 
                  materials directly from your dashboard after signing in.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <h5>Are the courses free?</h5>
                <p className="mb-0">
                  Yes, all our courses are available for free on our YouTube channel. 
                  We believe in making quality education accessible to everyone.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <h5>Do you provide study materials?</h5>
                <p className="mb-0">
                  Yes, we provide supplementary study materials, practice questions, 
                  and notes for most of our courses. These can be downloaded from the 
                  course page.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <h5>How can I request a new course topic?</h5>
                <p className="mb-0">
                  You can send us your course topic suggestions through the contact 
                  form on this page. We regularly review student requests and add new 
                  courses based on demand.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ContactPage