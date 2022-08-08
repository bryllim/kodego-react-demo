import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';

const Contact = () => {

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiOGYyNjBlMGEtYzk0My00ZDAxLThiNzAtNDNkMDcwNzA3NzI5IiwidG9rZW4iOiI1cjZHcTVUUW1hNk5uNWVxQloiLCJ0eXBlIjoiQ0xJRU5UIiwiaXNfcHJvZHVjdGlvbiI6dHJ1ZSwic2Vzc2lvbl9pZCI6ImRiMWU5Mzg0LTBlMjctNDY3Ni1iNzU2LTRmMmQ5Y2RkMTYxNCIsImlhdCI6MTY1OTk1ODI1NCwiZXhwIjoxNjU5OTU5MTU0fQ.Q0y91Xd42Oo8lbhE9Mc0Ld1LDk1fX1M8jQiEjrMRxfMQUOeJ_AZzZcvylSjuY-RW3HDx6JgENBlNMziY6gRxIrng1VP7WB2L3KoM6BQT6CTq2ZsR5fgznE__lh_IRai_gMDdFUM1x8zuiVXIxO1VHF41IoefsB-dMq-aAn3Q3e3dYNZLVIyEfByFyu92qLTl5C_6qwBLyS68W-9Rj7rTpu6O1tshhVcQRZdVNoTsalm_W0_IiHSr2LgE0myyfpv4IEgA5Yankr3ezQRlB_eFf97xZ9iiWpNtD_4Qt70OU47n5ZxCWL1v4hj0DWtR1NNTuKeRcfTqNKyhQm2vWlFhou4VdBUce6uIALW8zktxgZy_A_QPaBoN5w1DGsjmiXY4yv5V422p22lpMos4El49us4vVrOQE1qyHqX4vYObw2BZ19q8L6NPmT49hHnd39lkvyNpoTtIcp8LRYVakSqadjGf_SDBLYhPnkA7GAUvMpi_16oQNCcxc4_FI8kljURRPp8qNaUy_NE5V_qAKgioswiXCbb8aQPLs3Q1m5Attr5ralwGyzC6N4yP4hNnkLNbgd0KJgCVl5IQBsdwNz1-QJ687448pxNLYzlCI6nWpEzG5LQdeTxVV7xt1e1E3whgC_2JAp4JRFv5HomRJyAfKPG9nFQpgmYRrr5ONA5RgHw");
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
  
  const [contact, setContact] = useState({
    email: '',
    number: '',
    message: ''
  });

  function handleEmailChange(e) {
    setContact({
      ...contact,
      email: e.target.value
    })
  }

  function handleNumberChange(e) {
    setContact({
      ...contact,
      number: e.target.value
    })
  }

  function handleMessageChange(e) {
    setContact({
      ...contact,
      message: e.target.value
    })
  }

  return (
    <>
      <h1 className="my-4">Contact</h1>
      <hr></hr>
      <p>Email: <strong>{contact.email}</strong></p>
      <p>Contact Number: <strong>{contact.number}</strong></p>
      <p>Message: <strong>{contact.message}</strong></p>
      <hr></hr>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" onChange={handleEmailChange} />
          <Form.Label className="mt-3">Contact Number</Form.Label>
          <Form.Control type="number" placeholder="Enter your contact number" onChange={handleNumberChange}/>
          <Form.Label className="mt-3">Barangay</Form.Label>
          <Form.Select>
            {barangays.map(barangay => (
              <option>{barangay.barangay_name}</option>
            ))}
          </Form.Select>
          <Form.Label className="mt-3">Message</Form.Label>
          <Form.Control type="textarea" placeholder="Enter your message" onChange={handleMessageChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
};

export default Contact;