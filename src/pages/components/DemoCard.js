import Card from 'react-bootstrap/Card'

const DemoCard = (props) => {
    return (
        <Card className="mb-4">
            <Card.Header>{props.icon} {props.name}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <div>{props.description}</div>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default DemoCard;