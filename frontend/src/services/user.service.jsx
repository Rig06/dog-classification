import axios from "axios";
import authHeader from "./auth-header";

const getUserDoggyDex = () => {
  return axios.get(`/api/userdoggydex/getDogs`, { headers: authHeader() })
    .then(res => {
      const fetchedDoggyDex = res.data.breedIDs.map((entry) => {
        return entry.doggydexbreedid;
      })
      return fetchedDoggyDex;
    }).catch(e => console.log(e));
};

export default getUserDoggyDex;
