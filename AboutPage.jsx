import { Container, Row, Col, Card } from 'react-bootstrap'

function AboutPage() {
  const team = [
    {
      id: 1,
      name: 'Dr. Rahul Sharma',
      role: 'Founder & Physics Expert',
      bio: 'Ph.D in Physics with 15+ years of teaching experience for JEE and NEET exams.',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'Dr. Priya Patel',
      role: 'Biology Expert',
      bio: 'MBBS, MD with specialization in teaching biology concepts for medical entrance exams.',
      image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Prof. Amit Kumar',
      role: 'Chemistry Expert',
      bio: 'M.Sc, Ph.D in Chemistry with a passion for making complex concepts simple.',
      image: 'https://images.pexels.com/photos/8197527/pexels-photo-8197527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      role: 'Coding Instructor',
      bio: 'Full-stack developer with expertise in modern web technologies and 8+ years of teaching experience.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]

  return (
    <>
      <div className="page-header">
        <Container>
          <h1 className="display-4">About Us</h1>
          <p className="lead">Learn more about our mission and the team behind Code Academy</p>
        </Container>
      </div>
      
      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="mb-4">Our Story</h2>
            <p>
              Code Academy was founded in 2020 with a simple mission: to provide high-quality education 
              that is accessible to everyone. What started as a small YouTube channel has grown into a 
              comprehensive educational platform serving thousands of students across India.
            </p>
            <p>
              Our focus areas include JEE preparation, NEET preparation, and coding courses, catering to 
              students with diverse academic and career goals. We believe in education that empowers and 
              transforms lives.
            </p>
            <p>
              Our teaching methodology focuses on building strong foundations, conceptual clarity, and 
              problem-solving skills. We use real-world examples and applications to make learning engaging 
              and relevant.
            </p>
          </Col>
          <Col lg={6}>
            <img 
              src="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Code Academy Team"
              className="about-img shadow"
            />
          </Col>
        </Row>
        
        <Row className="my-5">
          <Col>
            <h2 className="text-center mb-5">Our Mission & Values</h2>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="display-4 text-primary mb-3">🎯</div>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  To democratize quality education and make it accessible to students regardless of 
                  their geographic location or economic background.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="display-4 text-primary mb-3">👁️</div>
                <Card.Title>Our Vision</Card.Title>
                <Card.Text>
                  To be the leading online educational platform that empowers students to achieve their 
                  academic goals and build successful careers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="display-4 text-primary mb-3">💎</div>
                <Card.Title>Our Values</Card.Title>
                <Card.Text>
                  Excellence, innovation, student-centricity, integrity, and continuous improvement guide 
                  everything we do at Code Academy.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="my-5">
          <Col>
            <h2 className="text-center mb-5">Meet Our Team</h2>
            <p className="text-center mb-5">
              Our team consists of experienced educators, subject matter experts, and technology professionals 
              dedicated to delivering the best learning experience.
            </p>
          </Col>
        </Row>
        
        <Row>
          {team.map(member => (
            <Col key={member.id} lg={3} md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm text-center">
                <div className="p-3">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="rounded-circle mb-3"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                  <Card.Text>{member.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default AboutPage