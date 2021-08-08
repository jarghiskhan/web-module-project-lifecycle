import axios from "axios";
import React from "react";

// const UserNames =[
// `jarghiskhan`,
//   `tetondan`,
//   `dustinmyers`,
//   `justsml`,
//   `luishrd`,
//   `bigknell`
// ]
// const RequestData = [];
// UserNames.forEach((element) =>
//     axios
//       .get(`https://api.github.com/users/${element}`)
//       .then(function (response) {
//         console.log(response.data)
//         RequestData.push(response.data)
//       })
//   );

class RequestData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  
  getUserData(){
      this.props.names.forEach((element) => {
        axios
          .get(`https://api.github.com/users/${element}`)
          .then((response) => {
            this.setState({
              data: response.data,
            });
          });
      });
    };


  render() {
    
    return <></>;
  }
}

export default RequestData;
