import React from 'react';

const SearchCard = ({hero}) => {

  const {name, image} = hero;

 return (
  <div className="card mb-3" style={{maxWidth:"300px"}}>
    <div className="row g-0">
      <div className="col-md-6">
        <img src={image.url} className="img-fluid rounded-start" alt={name} />
      </div>
      <div className="col-md-6">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <button className="btn btn-primary m-1">more</button>
          <button className="btn btn-primary m-1">added</button>
        </div>
      </div>
    </div>
 </div>
 );
}

export default SearchCard;
