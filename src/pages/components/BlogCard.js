import Card from 'react-bootstrap/Card'
import parse from "html-react-parser";

const BlogCard = (props) => {
    return (
        <Card className="mb-4">
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <div>{parse(props.content)}</div>
                    <footer className="blockquote-footer">{props.author}</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default BlogCard;