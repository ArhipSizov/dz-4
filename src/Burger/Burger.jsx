import "./Burger.css";
import BigOneBurger from "./BigOneBurger/BigOneBurger";
import { useState } from "react";

export default function Burger({
  img,
  name,
  weight,
  cost,
  addActiveUser,
  burgers,
}) {
  const [showComponent, setShowComponent] = useState(false);
  function setComponent() {
    setShowComponent(true);
    console.log(446);
  }

  return (
    <div>
      {burgers.map((item) => (
        <div {...item} key={item.id} className="littleBurger">
          {
            <BigOneBurger
              name={name}
              img={img}
              showComponent={showComponent}
              setShowComponent={setShowComponent}
              weight={weight}
            />
          }
          <img src={img} alt="" />
          <div className="info">
            <p>{name}</p>
            <p>{weight}г</p>
            <p>{cost}р</p>
          </div>
          <button onClick={setComponent}>Добавить</button>
          <button onClick={addActiveUser}>bad</button>
        </div>
      ))}
    </div>
  );
}
