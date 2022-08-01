import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogPost(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  );
}

export default BlogPost;