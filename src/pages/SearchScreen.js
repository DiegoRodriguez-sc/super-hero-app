import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFormik } from "formik";
import axios from 'axios';
import queryString from "query-string";
import { useEffect } from 'react';
import HeroCard from '../components/HeroCard';


const SearchScreen = ({history}) => {

  const location = useLocation();
  const { q = "" } = queryString.parse( location.search );
  
  const [heros, setHeros] = useState([]);
  const [error, setError] = useState("");
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
      setLoading(true);
      const fetchHeroes = async () => {
        let response = await axios.get(`https://www.superheroapi.com/api.php/4205666286179774/search/${q}`);
        response.data.response === "success"
          ? setHeros(response.data.results)
          : setError(response.data.error);
        setLoading(false);
      };
      fetchHeroes();
    }
  }, [q]);

 return (
  <div className="row w-auto m-2">
   <div className="col-md-4 m-2 p-3 ms-auto me-auto">
     <form onSubmit={formik.handleSubmit}>
       <div className="form-floating text-light">
          <input
            type="text"
            className="form-control bg-dark text-light"
            id="floatingInput"
            name="search"
            placeholder="Hero name"
            autoComplete="off"
            onChange={formik.handleChange}
             value={formik.values.search}         
          />
          <label htmlFor="floatingInput">Hero name</label>
        </div>
        <button className="w-100 btn btn-lg btn-warning" type="submit">
        Search
      </button>
     </form>
   </div>
   <div className="col m-2 p-2 w-100">
    <div className="d-flex flex-wrap justify-content-center" >
     {
       loading 
       ? <div className="spinner-grow text-light" role="status">
          <span className="visually-hidden">Loading...</span>
         </div>
       : heros.length > 0 ? heros.map(hero => <HeroCard key={hero.id} hero={hero} />)
               : <div className="alert alert-info w-100 " role="alert">{error ? error : `Look for a Hero!`}</div> 
     }
    </div>
   </div>
  </div>
 );
}

export default SearchScreen;
