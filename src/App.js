import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import BlogPost from './BlogPost';

function App() {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col md={3}>
          <BlogPost title="test" description="lorem ipsum" />
        </Col>
        <Col md={3}>
          <BlogPost title="apple" description="lorem ipsum" />
        </Col>
        <Col md={3}>
          <BlogPost title="banana" description="lorem ipsum" />
        </Col>
        <Col md={3}>
          <BlogPost title="float" description="lorem ipsum" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
