import React from 'react';
import { Link } from 'react-router-dom';

const SearchCard = ({hero}) => {

  const {name, image, id} = hero;

 return (
  <div className="card mb-3" style={{maxWidth:"300px"}}>
    <div className="row g-0">
      <div className="col-md-6">
        <img src={image.url} className="img-fluid rounded-start" alt={name} />
      </div>
      <div className="col-md-6">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <Link className="btn btn-primary" to={ `./hero/${ id }` }>more</Link>
          <button className="btn btn-primary m-1">added</button>
        </div>
      </div>
    </div>
 </div>
 );
}

export default SearchCard;
