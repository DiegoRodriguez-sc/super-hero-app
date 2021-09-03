import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startDeleteHero } from "../actions/heros";

const HomeHeroCard = ({ id }) => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [hero, setHero] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://www.superheroapi.com/api.php/4205666286179774/${id}`)
      .then((response) => {
        setHero(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    if(!loading){
      const {biography} = hero;
      dispatch(startDeleteHero(biography.alignment, id));
    }
  }


  return (
    <div>
      {loading ? (
        <div>cargarndo..</div>
      ) : (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={hero.image.url}
                className="img-fluid rounded-start"
                alt={hero.name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{hero.name}</h5>
                <div className="row">
                  <div className="col">
                    <ul>
                      <li>intelligence: {hero.powerstats.intelligence || 0}</li>
                      <li>strength: {hero.powerstats.strength || 0}</li>
                      <li>speed: {hero.powerstats.speed || 0}</li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul>
                      <li>durability: {hero.powerstats.durability || 0}</li>
                      <li>power: {hero.powerstats.power || 0}</li>
                      <li>combat: {hero.powerstats.combat || 0}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">mas info</button>
                <button className="btn btn-danger" onClick={handleDelete}> borrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeHeroCard;
