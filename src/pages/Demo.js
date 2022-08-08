import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import DemoCard from './components/DemoCard';

const Demo = () => {

    const [fruits, setFruits] = useState(
        [
            {
                name: "Apple",
                icon: "🍎",
                description: "An apple a day keeps the doctor away."
            },
            {
                name: "Orange",
                icon: "🍊",
                description: "An orange a day keeps the doctor away."
            },
            {
                name: "Pineapple",
                icon: "🍍",
                description: "A pineapple a day keeps the doctor away."
            },
            {
                name: "Banana",
                icon: "🍌",
                description: "A banana a day keeps the doctor away."
            },
        ]
    );

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
    });

    const handleFirstNameChange = (event) => {
        setUser({
            ...user,
            firstName: event.target.value
        })
    };

    const handleLastNameChange = (event) => {
        setUser({
            ...user,
            lastName: event.target.value
        })
    };

    return (
        <>
            <h1 className="mt-5">Activity 6 Demo</h1>
            <p>First name: {user.firstName} | Last name: {user.lastName}</p>
            <hr></hr>
            <Form>
                <Form.Control type="text" placeholder="Enter first name" onChange={handleFirstNameChange}></Form.Control>
                <Form.Control className='mt-2' type="text" onChange={handleLastNameChange} placeholder="Enter last name"></Form.Control>
                <Button
                    className='mt-2'
                    variant="primary"
                    onClick={()=>{
                        alert(`Hello ${user.firstName} ${user.lastName}!`);
                    }}
                >
                    Test Button
                </Button>
            </Form>
            <hr></hr>
            <h1 className="my-4">Demo</h1>
            {fruits.map(fruit => (
                <DemoCard
                    name={fruit.name}
                    icon={fruit.icon}
                    description={fruit.description}
                ></DemoCard>
            ))}
        </>
    )
}

export default Demo;
