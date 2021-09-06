import axios from "axios";
import Swal from "sweetalert2";
import { type } from "../types/type";


export const startLogin = (data) =>{
 return (dispatch) =>{
  axios.post('http://challenge-react.alkemy.org/', data)
    .then(response => {
      const {token} = response.data;
      localStorage.setItem("token",token);
      dispatch(login(token));
    })
    .catch(error => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password or user is incorrect',
      })
      dispatch(finishChecking());
      dispatch(logout());
    });
  }
};

export const renewLogin = () =>{
  return (dispatch) =>{
      const token = localStorage.getItem("token");
      if(token){
        dispatch(login(token));
      }else{
        console.log("error");
        dispatch(finishChecking());
        dispatch(logout());
      }
  };
};

export const startLogout = () =>{
  return(dispatch) =>{
      localStorage.clear();
      dispatch(logout());
  }
};

const login = (token) => ({
  type:type.Login,
  payload:token
});

const finishChecking = () => ({
  type:type.authFinishChecking
});

const logout = () =>({
  type:type.logout
});