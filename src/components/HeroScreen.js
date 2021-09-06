import axios from "axios";
import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { useParams} from "react-router-dom";

const HeroScreen = ({ history }) => {
  const { heroId } = useParams();
  const [hero, setHero] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchHeroDetails = async () => {
      let response = await axios.get(
        `https://www.superheroapi.com/api.php/4205666286179774/${heroId}`
      );
      response.data.response === "success"
        ? setHero(response.data)
        : setError(response.data.error);
      setLoading(false);
    };
    fetchHeroDetails();
  }, [heroId]);

  const handleReturn = () => {

      if( history.length <=2 ) {
          history.push('/');
      } else {
          history.goBack();
      }

  }
  return (
    <Fragment>
    <button 
     className="card btn btn-dark m-2"
    onClick={handleReturn}
     >back</button>
    <div className="m-2 p-2 text-light d-flex justify-content-center">
      {loading ? (
        <div className="spinner-grow text-light " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : error ? (
        <div>oops, there seems to be an error {error}</div>
      ) : (
        <div className="card m-4">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={hero.image.url}
                className="img-fluid rounded-start"
                alt={hero.name}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body d-flex flex-column justify-content-between h-100">
                <h1 className="card-title fw-bold">{hero.name}</h1>
                <h4 className="card-title">{hero.biography.aliases.map(aliase => `${aliase} | `)}</h4>
                <hr />
                <div className="mt-2 h4">
                  <div className="row text-center">
                    <div className="col">
                      <p className="card-text">
                        Intelligence: {hero.powerstats.intelligence}
                      </p>
                      <p className="card-text">
                        Strength: {hero.powerstats.strength}
                      </p>
                      <p className="card-text">
                        Speed: {hero.powerstats.speed}
                      </p>
                    </div>
                    <div className="col">
                      <p className="card-text">
                        Durability: {hero.powerstats.durability}
                      </p>
                      <p className="card-text">
                        Power: {hero.powerstats.power}
                      </p>
                      <p className="card-text">
                        Combat: {hero.powerstats.combat}
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="mt-2 h4">
                  <div className="d-flex justify-content-around">
                    <p className="card-text">
                      Weight: {hero.appearance.weight[1]}
                    </p>
                    <p className="card-text">
                      Height: {hero.appearance.height[1]}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="mt-2 h4">
                  <div className="d-flex justify-content-around">
                    <p className="card-text">
                      Eye Color: <span style={{color:hero.appearance["eye-color"]}}>{hero.appearance["eye-color"]}</span>
                    </p>
                    <p className="card-text">
                      Hair Color: <span style={{color:hero.appearance["hair-color"]}}>{hero.appearance["hair-color"]}</span>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="mt-2 h4">
                  <div>
                    <p className="card-text">Work: {hero.work.occupation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    
    </Fragment>
  );
};

export default HeroScreen;
