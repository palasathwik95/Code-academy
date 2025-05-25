import { Container, Row, Col, Card } from 'react-bootstrap'

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Ankit Sharma',
      role: 'JEE Advanced, AIR 345',
      content: 'The JEE Physics lectures helped me understand complex concepts clearly. The problem-solving strategies taught here were invaluable during my preparation.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'NEET, AIR 560',
      content: 'The detailed explanation of biological processes and diagrams made learning easier. I credit my success in NEET to these comprehensive video lectures.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Rahul Gupta',
      role: 'Full Stack Developer',
      content: 'Started with zero coding knowledge and now I\'m working as a full-stack developer. The project-based learning approach really helps in gaining practical skills.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]

  return (
    <section className="py-5">
      <Container>
        <h2 className="section-title">Student Success Stories</h2>
        
        <Row>
          {testimonials.map(testimonial => (
            <Col key={testimonial.id} md={4} className="mb-4">
              <Card className="testimonial-card h-100">
                <div className="d-flex align-items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="testimonial-img me-3"
                  />
                  <div>
                    <h5 className="mb-0">{testimonial.name}</h5>
                    <p className="text-muted mb-0">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-3">
                  {[1, 2, 3, 4, 5].map(star => (
                    <span key={star} className="text-warning me-1">★</span>
                  ))}
                </div>
                <Card.Text>{testimonial.content}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default TestimonialsSection