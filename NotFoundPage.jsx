import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

function NotFoundPage() {
  return (
    <Container className="py-5 text-center">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="mb-4">
            <span className="display-1 text-primary">404</span>
          </div>
          <h1 className="mb-4">Page Not Found</h1>
          <p className="lead mb-5">
            We're sorry, but the page you requested could not be found.
            Please check the URL or navigate back to the homepage.
          </p>
          <Button as={Link} to="/" variant="primary" size="lg">
            Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFoundPage