import './Burger.css';
import { useState } from "react";

export default function Burger({img,name,weight,cost,id}){

    return(
    <div className='bigBurger'>
            <img src={img} alt="" />
            <div className='info'>
                <p>{name}</p>
                <p>{weight}г</p>
                <p>{cost}р</p>
            </div>
    </div>)


}