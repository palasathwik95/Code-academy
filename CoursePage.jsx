import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Button, Badge, Card, ListGroup } from 'react-bootstrap'
import { coursesData } from '../data/coursesData'

function CoursePage() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [relatedCourses, setRelatedCourses] = useState([])
  
  useEffect(() => {
    const foundCourse = coursesData.find(c => c.id === id)
    
    if (foundCourse) {
      setCourse(foundCourse)
      
      // Find related courses (same category, excluding current course)
      const related = coursesData
        .filter(c => c.category === foundCourse.category && c.id !== id)
        .slice(0, 3)
      
      setRelatedCourses(related)
    }
  }, [id])
  
  if (!course) {
    return (
      <Container className="py-5 text-center">
        <h2>Course not found</h2>
        <p>The course you're looking for doesn't exist or has been removed.</p>
        <Link to="/courses" className="btn btn-primary">
          Browse All Courses
        </Link>
      </Container>
    )
  }
  
  const getCategoryBadge = (category) => {
    switch(category) {
      case 'jee':
        return 'primary';
      case 'neet':
        return 'success';
      case 'coding':
        return 'info';
      default:
        return 'secondary';
    }
  }
  
  const redirectToYouTube = () => {
    // Open YouTube video in a new tab
    window.open(`https://www.youtube.com/watch?v=${course.youtubeId}`, '_blank')
  }

  return (
    <>
      <div className="page-header">
        <Container>
          <Badge
            bg={getCategoryBadge(course.category)}
            className="mb-2"
          >
            {course.category.toUpperCase()}
          </Badge>
          <h1 className="display-4">{course.title}</h1>
          <p className="lead">{course.description.substring(0, 120)}...</p>
        </Container>
      </div>
      
      <Container className="py-5">
        <Row>
          <Col lg={8} className="mb-5 mb-lg-0">
            <div className="course-video ratio ratio-16x9 mb-4">
              <img 
                src={course.image} 
                alt={course.title}
                className="rounded"
                style={{ objectFit: 'cover' }}
              />
              <div 
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
              >
                <Button 
                  variant="danger" 
                  size="lg" 
                  className="rounded-circle"
                  style={{ width: '80px', height: '80px' }}
                  onClick={redirectToYouTube}
                >
                  <i className="bi bi-play-fill fs-1"></i>
                </Button>
              </div>
            </div>
            
            <h3 className="mb-4">About This Course</h3>
            <p>{course.description}</p>
            
            <Row className="my-4">
              <Col sm={4} className="mb-3">
                <Card className="h-100 border-0 shadow-sm text-center">
                  <Card.Body>
                    <div className="fs-1 text-primary mb-2">
                      <i className="bi bi-journal-text"></i>
                    </div>
                    <h5>{course.lessons} Lessons</h5>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4} className="mb-3">
                <Card className="h-100 border-0 shadow-sm text-center">
                  <Card.Body>
                    <div className="fs-1 text-primary mb-2">
                      <i className="bi bi-clock"></i>
                    </div>
                    <h5>{course.duration}</h5>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4} className="mb-3">
                <Card className="h-100 border-0 shadow-sm text-center">
                  <Card.Body>
                    <div className="fs-1 text-primary mb-2">
                      <i className="bi bi-bar-chart"></i>
                    </div>
                    <h5>{course.level}</h5>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            
            <h3 className="mb-4">What You'll Learn</h3>
            <Row className="mb-5">
              <Col md={6}>
                <ul className="list-unstyled">
                  {[1, 2, 3, 4].map(item => (
                    <li key={item} className="mb-3">
                      <div className="d-flex">
                        <div className="me-2 text-primary">
                          <i className="bi bi-check-circle-fill"></i>
                        </div>
                        <div>
                          Key concept {item} related to {course.title}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col md={6}>
                <ul className="list-unstyled">
                  {[5, 6, 7, 8].map(item => (
                    <li key={item} className="mb-3">
                      <div className="d-flex">
                        <div className="me-2 text-primary">
                          <i className="bi bi-check-circle-fill"></i>
                        </div>
                        <div>
                          Advanced topic {item} in {course.category.toUpperCase()} curriculum
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
            
            <div className="text-center">
              <Button 
                variant="primary" 
                size="lg" 
                className="px-5"
                onClick={redirectToYouTube}
              >
                Watch Course on YouTube
              </Button>
            </div>
          </Col>
          
          <Col lg={4}>
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                <h4 className="mb-4">Course Information</h4>
                
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between px-0">
                    <span>Category:</span>
                    <Badge bg={getCategoryBadge(course.category)}>
                      {course.category.toUpperCase()}
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between px-0">
                    <span>Lessons:</span>
                    <span>{course.lessons}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between px-0">
                    <span>Duration:</span>
                    <span>{course.duration}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between px-0">
                    <span>Level:</span>
                    <span>{course.level}</span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            
            {relatedCourses.length > 0 && (
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <h4 className="mb-4">Related Courses</h4>
                  
                  {relatedCourses.map(relatedCourse => (
                    <Card key={relatedCourse.id} className="mb-3 border-0 shadow-sm">
                      <Row className="g-0">
                        <Col xs={4}>
                          <img 
                            src={relatedCourse.image} 
                            alt={relatedCourse.title}
                            className="img-fluid rounded-start"
                            style={{ height: '100%', objectFit: 'cover' }}
                          />
                        </Col>
                        <Col xs={8}>
                          <Card.Body>
                            <Card.Title className="fs-6">{relatedCourse.title}</Card.Title>
                            <Link 
                              to={`/course/${relatedCourse.id}`} 
                              className="btn btn-sm btn-outline-primary"
                            >
                              View Course
                            </Link>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  ))}
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CoursePage