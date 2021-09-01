import React from 'react';

const SearchScreen = () => {
 return (
  <div className="row">
   <div className="col-md-4 m-2 p-2">
     <form >
       <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            name="search"
            placeholder="Hero name"
            autoComplete="off"          
          />
          <label htmlFor="floatingInput">Hero name</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
        Search
      </button>
     </form>
   </div>
   <div className="col"></div>
  </div>
 );
}

export default SearchScreen;
