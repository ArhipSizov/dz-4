import './Burger.css';
import { useState } from "react";
import closeImg from '../../../public/close.svg'

export default function Burger({img,name,weight,cost,id, showComponent, setShowComponent}){

console.log(showComponent,name,img);

    const [num,setNum] = useState(0)

    function editBut(amper) {
        if (String(amper) === "-1" && num === 0){
          console.log(32);
            return
        }
      const result = num + amper
      setNum(result)
      console.log(result);
    }
    function setComponent(){
      setShowComponent(false);
      console.log(446);
  }
  function setComponent2(){
    setShowComponent(true);
    console.log(446);
}

    return(
      showComponent && 
    <div className="bigBurger">
      <div className='notSoBigBurger'>
        <p>{name}</p>
        <img src={closeImg} onClick={setComponent} alt="" />
        <div>
          <img src={img} alt="" />
          <div className="info">
            <p>
              Супер мясное наслаждение! Большая рубленая котлета из свежего
              говяжего мяса покорит вас своей сочностью, а хрустящие листья салата
              добавят свежести.
            </p>
            <div>
            <p>хлеб</p>
            <p>котлета</p>
            <p>кетчуп</p>
            <div>
              <p>{weight}г,ккал 999</p>
            </div>
            </div>
          </div>
        </div>
        <div>
          <button></button>
              <div className='buttonDiv'>
              <button  className='invisBut' onClick={() => editBut(-1)}>-</button>
                  <p className='num'>{num}</p>
                  <button className='invisBut' onClick={() => editBut(+1)}>+</button>
              </div>
          </div>
          </div>
        </div>
    

    );
}