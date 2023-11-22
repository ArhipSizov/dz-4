import "./Burger.css";
import BigOneBurger from "./BigOneBurger/Burger";
import { useState } from "react";

export default function Burger({ img, name, weight, cost, id }) {
  function AddBigOneBurger(params) {
    console.log("2323");
    return <BigOneBurger />;
  }
  return (
<div className='littleBurger'>
            <img src={img} alt="" />
            <div className='info'>
                <p>{name}</p>
                <p>{weight}г</p>
                <p>{cost}р</p>
            </div>
            <button>Добавить</button>
    </div>)
}
