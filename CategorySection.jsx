import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'

function CategorySection() {
  const categories = [
    {
      id: 'jee',
      title: 'JEE Preparation',
      description: 'Comprehensive courses for JEE Main & Advanced with expert guidance and problem-solving techniques.',
      image: 'https://images.pexels.com/photos/6238048/pexels-photo-6238048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'neet',
      title: 'NEET Preparation',
      description: 'In-depth courses covering Physics, Chemistry, and Biology for NEET aspirants with thorough concept explanations.',
      image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'coding',
      title: 'Coding Courses',
      description: 'Learn programming languages, web development, and software engineering with hands-on projects.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]

  return (
    <section className="py-5">
      <Container>
        <h2 className="section-title">Our Course Categories</h2>
        
        <Row>
          {categories.map(category => (
            <Col key={category.id} md={4} className="mb-4">
              <Card className="category-card h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={category.image} 
                  alt={category.title}
                  className="category-img"
                />
                <Card.Body>
                  <Card.Title className="mb-3">{category.title}</Card.Title>
                  <Card.Text>{category.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <Link 
                    to={`/courses/${category.id}`} 
                    className="btn btn-outline-primary"
                  >
                    View Courses
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default CategorySection