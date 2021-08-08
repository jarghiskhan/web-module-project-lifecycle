import React from "react";
import UserList from "./components/UserList.js";
import "./components/RequestData";
import UserNames from "./components/UserNames";
import { getUserData } from "./components/RequestData.util.js";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
componentDidMount(){
  this.setState({
    data: getUserData(UserNames),
  })
}

  render() {
    console.log(this.state)
    return (
      <div>
      <h1>header</h1>
        <UserList data={this.state.data} ></UserList>
      </div>
    );
  }
}

export default App;
