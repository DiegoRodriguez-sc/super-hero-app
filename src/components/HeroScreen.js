import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const HeroScreen = ({ history }) => {
  const { heroId } = useParams();
  console.log(heroId);
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

  // if ( !hero ) {
  //     return <Redirect to="/" />;
  // }

  // const handleReturn = () => {

  //     if( history.length <=2 ) {
  //         history.push('/');
  //     } else {
  //         history.goBack();
  //     }

  // }
  return (
    <div className="m-2 p-2">
      {loading ? (
        <div>cargando..</div>
      ) : error ? (
        <div>oops, there seems to be an error {error}</div>
      ) : (
        <div className="card mb-3" style={{ maxWidth: "100%" }}>
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
                <h3 className="card-title">{hero.name}</h3>
                <h5 className="card-title">{hero.biography.aliases}</h5>
                <div className="mt-2">
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
                <div className="mt-2">
                  <div className="d-flex justify-content-around">
                    <p className="card-text">
                      Weight: {hero.appearance.weight.map((wei) => ` ${wei}. `)}
                    </p>
                    <p className="card-text">
                      Height: {hero.appearance.height.map((hei) => ` ${hei}. `)}
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="d-flex justify-content-around">
                    <p className="card-text">
                      Eye Color: {hero.appearance["eye-color"]}
                    </p>
                    <p className="card-text">
                      Hair Color: {hero.appearance["hair-color"]}
                    </p>
                  </div>
                </div>
                <div className="mt-2">
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
  );
};

export default HeroScreen;
