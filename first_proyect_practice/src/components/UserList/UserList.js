import React from "react";
import Card from "../IU/Card";
import InfoRow from "../IU/InfoRow";
import style from "./UserList.module.css";

export default function UserList(props) {

  let userCard;
  if (props.data.length === 0) {
    return;
  } else {
    userCard = props.data.map((info) => <InfoRow key={info.key} message={`${info.name} (${info.age} años)`} />)
  }
  return (
    <Card>
      <ul className={style.listUnstyled}>
        {userCard}
      </ul>
    </Card>
  );
}
