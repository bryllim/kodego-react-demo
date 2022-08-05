import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';

const Contact = () => {

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer your_api_here");
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "region_id": [
      "070000000"
    ],
    "province_id": [
      "072200000"
    ],
    "municipality_id": [
      "072217000"
    ]
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  useEffect(() => {
    fetch("https://api.concati.com/address/barangays", requestOptions)
    .then(response => response.text())
    .then(result => setBarangays(JSON.parse(result).data))
    .catch(error => console.log('error', error));
  }, []);

  const [barangays, setBarangays] = useState([]);

  return (
    <>
      <h1 className="my-4">Contact</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <Form.Label className="mt-3">Contact Number</Form.Label>
          <Form.Control type="number" placeholder="Enter your contact number" />
          <Form.Label className="mt-3">Barangay</Form.Label>
          <Form.Select>
            {barangays.map(barangay => (
              <option>{barangay.barangay_name}</option>
            ))}
          </Form.Select>
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