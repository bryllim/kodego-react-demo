import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <>
      <h1 className="my-4">Contact</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <Form.Label className="mt-3">Contact Number</Form.Label>
          <Form.Control type="number" placeholder="Enter your contact number" />
          <Form.Label className="mt-3">Message</Form.Label>
          <Form.Control type="textarea" placeholder="Enter your message" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
};

export default Contact;