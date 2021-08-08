import React from "react";


class User extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  render() {
      console.log(this.props)
    return (
      <div>
        <h3>{this.props.user.name}</h3>
        <p>{this.props.user.followers.length}</p>
        <button>View Followers</button>
      </div>
    );
  }
}

export default User;
