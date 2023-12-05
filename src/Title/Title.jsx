import './Title.css';
import { useState } from "react";



export default function Title({name,cost,weight,img,editAllNum,editAllSum}){

    const [showComponent, setShowComponent] = useState(true);


    const [num,setNum] = useState(0)
    const [sum,setSum] = useState(0)

    function editBut(amper) {
        if (String(amper) === "-1" && num === 0){

            setShowComponent(false);
            return
        }
      const result = num + amper
      editAllNum(amper)
      setNum(result)
      console.log(result);
    }
    function editBut2(amper) {
        let cost2 = -cost
        if (String(amper) === cost2 && sum === 0){
            
                setShowComponent(false);
                return
              }
      const result2 = sum + amper
      editAllSum(amper)
      setSum(result2)
    }




    return(

        showComponent && <div className='litlAll'>
            <img src={img} alt="" />
            <div className='info'>
                <p>{name}</p>
                <p>{weight}г</p>
                <p>{cost}р</p>
            </div>
            <div className='buttonDiv'>
                <button onClick={() => editBut2(-cost)}>
            <button  className='invisBut'  onClick={() => editBut(-1)}>-</button>
            </button>
                <p className='num'>{num}</p>
                <button onClick={() => editBut2(+cost)}>
                <button className='invisBut' onClick={() => editBut(+1)}>+</button>
                </button>
            </div>
        </div>
    )


}