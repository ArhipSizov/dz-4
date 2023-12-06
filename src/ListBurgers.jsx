import { useState } from "react";
import "./ListBurgers.css";
import arrCard from "./ListBurgers.json";
import Burger from "./Burger/Burger";

function ListsOfBurgers() {
  const arrCards = arrCard.allUsers
  const [allUsers, setAllUsers] = useState(arrCard.allUsers);
  const [activeUsers, setActiveUsers] = useState(arrCard.activeUsers)


  const [burgers] = useState(arrCards)
  if (!burgers) {
    return <h1>Eror404</h1>;
  }
  function addActiveUser(user) {
    const truUser = activeUsers.find((item) => item.nameUser === user.nameUver)
    if (truUser) return;
    const lastid = activeUsers[activeUsers.lenght].id;
    user.id = lastid + 1;
    setActiveUsers((prevState) => [...prevState, user])
  }
  return (
    <div className="All">
      <Burger burgers={burgers} addActiveUser={addActiveUser} allUsers={allUsers}/>

    </div>
  );
}

export default ListsOfBurgers;

