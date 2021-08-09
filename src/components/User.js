import React from "react";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  render() {
    console.log("Followers: ", this.props.user.followers);
    return (
      <div className="userCard">
        <h3>{this.props.user.name}</h3>
        <h4>Followers: {this.props.user.followers.length}</h4>
        <ul>
          {this.props.user.followers.map((follower) => (
            <li>{follower.login}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default User;
