import { useState } from "react";
import "./ListBurgers.css";
import arrCards from "./ListBurgers.json"
import Burger from "./Burger/Burger";

function ListsOfBurgers() {

    const [burgers, setBurgers] = useState(arrCards)
    console.log(burgers);
    if (!burgers){
      return <h1>Eror404</h1>
    }

    return (
      <div className="All"> 
              {burgers.map(item => <Burger {...item} key={item.id}/>
        )}
      </div>
  
    );
  }
  
  export default ListsOfBurgers;