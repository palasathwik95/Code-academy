import { Container, Row, Col } from 'react-bootstrap'

function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: '🎓',
      number: '10,000+',
      title: 'Students'
    },
    {
      id: 2,
      icon: '📚',
      number: '200+',
      title: 'Courses'
    },
    {
      id: 3,
      icon: '🏆',
      number: '500+',
      title: 'Success Stories'
    },
    {
      id: 4,
      icon: '⭐',
      number: '4.8',
      title: 'Average Rating'
    }
  ]

  return (
    <section className="py-5 bg-primary text-white">
      <Container>
        <Row className="justify-content-center">
          {stats.map(stat => (
            <Col key={stat.id} md={3} sm={6} className="mb-4 mb-md-0 text-center">
              <div className="px-2">
                <div className="display-4 mb-2">{stat.icon}</div>
                <h2 className="stats-number">{stat.number}</h2>
                <p className="mb-0">{stat.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default StatsSection