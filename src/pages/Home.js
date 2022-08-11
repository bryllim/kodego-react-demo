import { useEffect, useState } from "react";
import "./Home.scss";

const Home = () => {
  const [count, setCount] = useState(0);

  const options = { timeZone: "Asia/Manila", timeZoneName: "short" };
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setCurrentDate(new Date());
    }, 1000);
  }, [currentDate]);

  return (
    <div className="centerLine">
      <h1 className="mt-5 textRed">
        Welcome to a Blog Website{" "}
        {currentDate.toLocaleTimeString("en-SG", options)}{" "}
      </h1>
      <h2>Mondi was here</h2>
      <p className="boldFont">
        This is a simple blog website that I created to learn React.js
      </p>
      <img src="https://kodego.ph/_nuxt/img/join_asset.9a7edbb.png"></img>
    </div>
  );
};

export default Home;
