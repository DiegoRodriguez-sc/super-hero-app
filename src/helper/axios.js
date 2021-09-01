import axios from "axios"


export const getHeroSearch = (name) =>{
 

 axios.get(`https://www.superheroapi.com/api.php/4205666286179774/search/${name}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error
    });

}