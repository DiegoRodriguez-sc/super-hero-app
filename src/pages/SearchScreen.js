import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFormik } from "formik";
import axios from 'axios';
import queryString from "query-string";
import SearchCard from '../components/SearchCard';
import { useEffect } from 'react';


// const validate = (values) => {
//   const errors = {};
//   if (!values.search) {
//     errors.search = "Required";
//   }
//   return errors;
// };

const SearchScreen = ({history}) => {

  const location = useLocation();
  const { q = "" } = queryString.parse( location.search );
  
  const [heros, setHeros] = useState([]);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      search: q,
    },
    onSubmit: async(values) => {
      history.push(`?q=${ values.search }`);
    },
  });

  useEffect(() => {
    if(q === ""){
      setHeros([]);
    }else{
      setLoading(false);
      axios.get(`https://www.superheroapi.com/api.php/4205666286179774/search/${q}`)
      .then(response => {
        setHeros(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
    }
  }, [q])

 return (
  <div className="row">
   <div className="col-md-4 m-2 p-2">
     <form onSubmit={formik.handleSubmit} >
       <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            name="search"
            placeholder="Hero name"
            autoComplete="off"
            onChange={formik.handleChange}
             value={formik.values.search}         
          />
          <label htmlFor="floatingInput">Hero name</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
        Search
      </button>
     </form>
   </div>
   <div className="col">
    <div className="d-flex flex-wrap" >
     {
       loading 
       ? <div>cargando..</div>
       : heros.map(hero => <SearchCard key={hero.id} hero={hero} />)
     }
    </div>
   </div>
  </div>
 );
}

export default SearchScreen;
