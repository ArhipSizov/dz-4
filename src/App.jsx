import { useState } from "react";
import "./App.css";
import Title from "./Title/Title";

function App() {
  const [count, setCount] = useState(0);


  const burger ={
    name:"Супер сырный",
    weight:"512г",
    price:"550₽",
    img:"0"
  }
  const potato ={
    name:"Картошка фри",
    weight:"180г",
    price:"245₽",
    img:"1"
  }
  const hot_dog ={
    name:"Жгучий хот-дог",
    weight:"245г",
    price:"239₽",
    img:"2"
  }

  const [arr, setArr] = useState([burger,potato,hot_dog]);

  return (
    <div className="All">
        {arr.map((item) => {
          return <Title send1={{item}}/>
        })}
    </div>
  );
}

export default App;
