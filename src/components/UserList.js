import React from "react";
import User from "./User.js";

const UserList = (props) => {
  console.log("User list ", props);
  return (
  <>
    <div className="userList">
      {props.data.map((user, index) => {
        return <User key={index} user={user}></User>;
      })}
    </div></>
  );
};

export default UserList;
