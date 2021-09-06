import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import { deleteHero, setNewHero } from "../actions/heros";
import "../styles/card.css";

// import { startDeleteHero, startSetStats } from "../actions/heros";

const HeroCard = ({ hero }) => {

  const dispatch = useDispatch();
  const {team} = useSelector((state) => state.heros);
  let { pathname } = useLocation();
  const [error, setError] = useState("");

  const {powerstats, name, image, id } = hero;
  const {
    intelligence,
    strength,
    speed,
    durability,
    power,
    combat,
  } = powerstats;

  const onSetNewMember = (hero) => {
    const countAlignment = (alignment) => {
      return team.reduce(
        (acc, cur) => (cur.biography.alignment === alignment ? ++acc : acc),
        0
      );
    };

    if (team.length === 6) {
      setError("Your team is already complete");
    } else if (team.some((h) => h.id === hero.id)) {
      setError("This hero already belongs to your team");
    } else if (
      countAlignment("bad") === 3 &&
      hero.biography.alignment === "bad"
    ) {
      setError("There are already enough villains in your team");
    } else if (
      countAlignment("good") === 3 &&
      hero.biography.alignment === "good"
    ) {
      setError("There are already enough good heroes in your team");
    } else {
      dispatch(setNewHero(hero));
    }
  };
  return (
    <div>
      <div className="card mb-3 m-2 bg-dark text-light" style={pathname === "/search" ?{ maxWidth: "300px" } :{maxWidth:"500px"}}>
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={image.url}
              className="img-fluid rounded-start"
              alt={name}
            />
          </div>
          <div className="col-md-6 cardstat">
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              { pathname !== "/search" && (<div className="row align-items-center h-100">
                <div className="col-6">
                  <ul>
                    <li>Intelligence: {intelligence}</li>
                    <li>Strength: {strength}</li>
                    <li>Speed: {speed}</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>Durability: {durability}</li>
                    <li>Power: {power}</li>
                    <li>Combat: {combat}</li>
                  </ul>
                </div>
              </div>)}
            </div>
            <div className="card-footer">
              {error ? (
                <div className="">{error}</div>
              ) : (
                <div className="btns">
                  <Link to={`/hero/${id}`}>
                    <button className="btn btn-outline-light">Details</button>
                  </Link>

                  {pathname !== "/search" ? (
                    <button
                      className="btn btn-outline-danger"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(deleteHero(id));
                      }}
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-light"
                      onClick={(e) => {
                        e.preventDefault();
                        onSetNewMember(hero);
                      }}
                    >
                      Add
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;

// <div className={styles.containerCard}>
// <div className={styles.card}>
//   <div className={styles.front}>
//     <img src={image.url} />
//     <div className={styles.frontName}>{name}</div>
//   </div>
//   <div className={styles.back}>
//     <h6>Powerstats avg: {averageStats(...statsArr)}</h6>
//     <Chart
//       options={optionsCard}
//       series={[
//         {
//           name: "Score",
//           data: statsArr,
//         },
//       ]}
//       type="radar"
//       width="350"
//       height="310"
//     />
//     {error ? (
//       <div className={styles.error}>{error}</div>
//     ) : (
//       <div className={styles.buttons}>
//         <Link to={`/hero/${id}`}>
//           <button>Details</button>
//         </Link>

//         {pathname !== "/search" ? (
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               dispatch(removeTeamMember(id));
//             }}
//           >
//             Remove
//           </button>
//         ) : (
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               onSetNewMember(hero);
//             }}
//           >
//             Add hero
//           </button>
//         )}
//       </div>
//     )}
//   </div>
// </div>
// </div>
