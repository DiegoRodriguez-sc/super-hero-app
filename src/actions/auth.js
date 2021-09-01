import axios from "axios";
import { type } from "../types/type";


export const startLogin = (data) =>{
 return async(dispatch) =>{
  axios.post('http://challenge-react.alkemy.org/', data)
    .then(response => {
      const {token} = response.data;
      localStorage.setItem("token",token);
    })
    .catch(error => {
      console.log(error);
    });
  dispatch(login());
  }
};

const login = () => ({
  type:type.Login
})