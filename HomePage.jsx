import HeroSection from '../components/HeroSection'
import CategorySection from '../components/CategorySection'
import FeaturedCourses from '../components/FeaturedCourses'
import TestimonialsSection from '../components/TestimonialsSection'
import StatsSection from '../components/StatsSection'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedCourses />
      <StatsSection />
      <TestimonialsSection />
      
      {/* Call to Action Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="mb-4">Ready to Start Your Learning Journey?</h2>
              <p className="lead mb-4">
                Join thousands of students who have achieved their academic and career goals with our expert-led courses.
              </p>
              <Button 
                as={Link} 
                to="/courses" 
                variant="primary" 
                size="lg" 
                className="px-5 py-3"
              >
                Browse All Courses
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HomePage