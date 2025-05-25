import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { coursesData } from '../data/coursesData'

function FeaturedCourses() {
  // Get featured courses from each category
  const featuredCourses = coursesData
    .filter(course => course.featured)
    .slice(0, 6)

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="section-title">Featured Courses</h2>
        
        <Row>
          {featuredCourses.map(course => (
            <Col key={course.id} md={6} lg={4} className="mb-4">
              <Card className="course-card h-100 shadow-sm">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={course.image} 
                    alt={course.title}
                    className="course-img"
                  />
                  <span className="featured-badge">Featured</span>
                </div>
                <Card.Body>
                  <Badge 
                    bg={course.category === 'jee' ? 'primary' : course.category === 'neet' ? 'success' : 'info'}
                    className="mb-2"
                  >
                    {course.category.toUpperCase()}
                  </Badge>
                  <Card.Title className="mb-3">{course.title}</Card.Title>
                  <Card.Text>{course.description.substring(0, 100)}...</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <Link 
                    to={`/course/${course.id}`} 
                    className="btn btn-primary w-100"
                  >
                    View Course
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-4">
          <Link to="/courses" className="btn btn-outline-primary px-4">
            View All Courses
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedCourses