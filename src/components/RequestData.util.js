import axios from "axios";

async function getFollowerData(name) {
  return await axios
    .get(`https://api.github.com/users/${name}/followers`)
    .then((response) => {
      return response.data;
    });
}

export const getUserData = (names) => {
  let userDataArray = [];
  names.forEach((name) => {
    axios.get(`https://api.github.com/users/${name}`).then((response) => {
      const userData = response.data;
      getFollowerData(name).then((followersResponse) => {
        userDataArray.push({
          ...userData,
          followers: followersResponse,
        });
      });
    });
  });
  return userDataArray;
};
