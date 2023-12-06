import { useState } from "react";
import "./App.css";
import Title from "./Title/Title";
import arrCard from "./ListBurgers.json"

function App() {
  const arrCards = arrCard.allUsers


  const [showComponent] = useState(false);





  const [burgers] = useState(arrCards)
  if (!burgers){
    return <h1>Eror404</h1>
  }
  const [allNum,setNum] = useState(0)
  function editAllNum(amper) {
      setNum(allNum + amper)
  }

  const [allSum,setSum] = useState(0)
  function editAllSum(amper2) {
    setSum(allSum + amper2)
}





  return (
    showComponent && (<div className="All">
      <div className="container">
      <h1>{allNum}</h1>
      <h1>{allSum}</h1>   

      </div>

     {burgers.map(item => <Title {...item} key={item.id} editAllNum={editAllNum} editAllSum={editAllSum}/>
        )}
            
    </div>)

  );
}

export default App;
