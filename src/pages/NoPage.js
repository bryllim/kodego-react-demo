import React, { useEffect, useState } from "react";

const NoPage = () => {

  const [color, setColor] = useState({
    color: "red",
    hex: "#ff0000",
    rgb: "rgb(255, 0, 0)",
  });

  const [count, setCount] = useState(0);

  const [students, setStudents] = useState([
    { name: "John", age: 20 },
    { name: "Mark", age: 43 },
    { name: "Matthew", age: 10 },
    { name: "Luke", age: 60 },
  ]);

  const fruits = ["apple", "banana", "cherry"];

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => (count < 2 ? count + 1 : 0));
    }, 1000);
  });

  const updateColor = (newColor) => {
    setColor(previousState => {
      return {
        ...previousState, color: newColor
      }
    });
  }

  return (
    <div className="text-center jumbotron mt-5">
      {students.map(item =>
        <div>
          <h1>{item.name}</h1>
          <p>{item.age}</p>
        </div>
      )}
      <h2 className="mb-5">Timer: {fruits[count]}</h2>
      <h1>My favorite color is <span style={{ backgroundColor: color.color }} >{color.color}</span> !</h1>
      <button
        type="button"
        onClick={() => updateColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => updateColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => updateColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => updateColor("green")}
      >Green</button>
    </div >
  )
};

export default NoPage;