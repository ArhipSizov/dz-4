import "./Burger.css";
import BigOneBurger from "./BigOneBurger/Burger";
import { useState } from "react";

export default function Burger({ img, name, weight, cost }) {
  

    const [showComponent, setShowComponent] = useState(false);
function setComponent(){
    setShowComponent(true);
    console.log(446);
}
console.log(65);
  return (
<div className='littleBurger'>
{<BigOneBurger name={name} img={img} showComponent={showComponent} setShowComponent={setShowComponent} weight={weight}/>}
            <img src={img} alt="" />
            <div className='info'>
                <p>{name}</p>
                <p>{weight}г</p>
                <p>{cost}р</p>
            </div>
            <button onClick={setComponent}>Добавить</button>
    </div>)
}
