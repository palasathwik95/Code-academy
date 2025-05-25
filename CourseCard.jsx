import { Link } from 'react-router-dom'
import { Card, Badge } from 'react-bootstrap'

function CourseCard({ course }) {
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

  return (
    <Card className="course-card h-100 shadow-sm">
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={course.image} 
          alt={course.title}
          className="course-img"
        />
        {course.featured && <span className="featured-badge">Featured</span>}
      </div>
      <Card.Body>
        <Badge 
          bg={getCategoryBadge(course.category)}
          className="mb-2"
        >
          {course.category.toUpperCase()}
        </Badge>
        <Card.Title className="mb-3">{course.title}</Card.Title>
        <Card.Text>{course.description.substring(0, 100)}...</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white border-0 d-flex justify-content-between align-items-center">
        <div className="text-muted">
          <i className="bi bi-play-circle me-1"></i> {course.lessons} lessons
        </div>
        <Link 
          to={`/course/${course.id}`} 
          className="btn btn-primary"
        >
          View Course
        </Link>
      </Card.Footer>
    </Card>
  )
}

export default CourseCard