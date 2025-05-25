import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import CourseCard from '../components/CourseCard'
import { coursesData } from '../data/coursesData'

function CourseListPage() {
  const { category } = useParams()
  const [filteredCourses, setFilteredCourses] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  
  useEffect(() => {
    let courses = [...coursesData]
    
    if (category) {
      courses = courses.filter(course => course.category === category)
    }
    
    if (searchTerm) {
      courses = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    setFilteredCourses(courses)
  }, [category, searchTerm])
  
  const handleSearch = (e) => {
    e.preventDefault()
    // Search is already handled by the useEffect
  }
  
  const getCategoryTitle = () => {
    if (!category) return 'All Courses'
    
    switch(category) {
      case 'jee':
        return 'JEE Preparation Courses'
      case 'neet':
        return 'NEET Preparation Courses'
      case 'coding':
        return 'Coding Courses'
      default:
        return 'Courses'
    }
  }

  return (
    <>
      <div className="page-header">
        <Container>
          <h1 className="display-4">{getCategoryTitle()}</h1>
          <p className="lead">
            {category 
              ? `Explore our ${getCategoryTitle().toLowerCase()} taught by expert educators`
              : 'Browse our complete collection of courses across all categories'
            }
          </p>
        </Container>
      </div>
      
      <Container className="py-5">
        <Row className="mb-4">
          <Col md={6} className="mb-3 mb-md-0">
            <Form onSubmit={handleSearch}>
              <div className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="primary" type="submit" className="ms-2">
                  Search
                </Button>
              </div>
            </Form>
          </Col>
          <Col md={6} className="d-flex justify-content-md-end align-items-center">
            <p className="mb-0">
              {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} found
            </p>
          </Col>
        </Row>
        
        <Row>
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <Col key={course.id} md={6} lg={4} className="mb-4">
                <CourseCard course={course} />
              </Col>
            ))
          ) : (
            <Col className="text-center py-5">
              <h3>No courses found</h3>
              <p>Try adjusting your search or browse another category</p>
            </Col>
          )}
        </Row>
      </Container>
    </>
  )
}

export default CourseListPage