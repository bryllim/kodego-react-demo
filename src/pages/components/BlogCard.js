import Card from 'react-bootstrap/Card'

const BlogCard = (props) => {
    return (
        <Card className="mb-4">
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>{props.content}</p>
                    <footer className="blockquote-footer">{props.author}</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default BlogCard;