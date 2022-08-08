import ListGroup from 'react-bootstrap/ListGroup';
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

    return (
        <>
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
