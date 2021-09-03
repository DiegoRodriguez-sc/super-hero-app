import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startAddHero } from '../actions/heros';

const SearchCard = ({hero}) => {

  const dispatch = useDispatch();
  const {name, image, id , biography} = hero;

  const handleAdded = () =>{
      dispatch(startAddHero(biography.alignment, id));
  }

 return (
  <div className="card mb-3" style={{maxWidth:"300px"}}>
    <div className="row g-0">
      <div className="col-md-6">
        <img src={image.url} className="img-fluid rounded-start" alt={name} />
      </div>
      <div className="col-md-6">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <Link 
            className="btn btn-primary" 
            to={ `./hero/${ id }` }
          >more</Link>
          <button 
            className="btn btn-primary m-1"
            onClick={handleAdded}
          >added</button>
        </div>
      </div>
    </div>
 </div>
 );
}

export default SearchCard;
