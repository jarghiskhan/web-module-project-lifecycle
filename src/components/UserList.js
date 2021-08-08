import React from "react";
import User from "./User.js";

const UserList = (props) => {
  console.log("User list ", props);
  return (
  <>
    <div>
      <h2>Users</h2>
      {props.data.map((user, index) => {
        console.log('User list: ', user);
        return <User key={index} user={user}></User>;
      })}
    </div></>
  );
};

export default UserList;
