import './Title.css';
import { useState } from "react";
import img from '../assets/Rectangle_2(0).png'

export default function Title(props){
    console.log(props.send1.item);
    const [num, setNum] = useState(0);
    function numUp() {
            setNum(num + 1);
      }
      function numDown() {
        if (num > 0) {
        setNum(num - 1);
        }
      }
    return(
        <div className='litlAll'>
            <img src={img} alt="" />
            <div className='info'>
                <p>{props.send1.item.name}</p>
                <p>{props.send1.item.weight}</p>
                <p>{props.send1.item.price}</p>
            </div>
            <div className='buttonDiv'>
                <button onClick={numDown}>-</button>
                <p className='num'>{num}</p>
                <button onClick={numUp}>+</button>
            </div>
        </div>
    )
}