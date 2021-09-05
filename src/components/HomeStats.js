import React from 'react';
import { useSelector } from 'react-redux';
import { averageHeight, averageWeight, powerStats, strongestStat } from '../helper/functionsAux';

const HomeStats = () => {

 const {team} = useSelector(state => state.heros);
 
 const stat = powerStats(team);

 return (
  <div className="card text-dark bg-warning mb-3 m-2 p-1" style={{border:"2px solid red"}}>
   <div className="row text-center">
    <div className="col">
     <p>-intelligence</p>
     <p>-strength</p>
     <p>-speed</p>
     <p>-durabiliy</p>
     <p>-power</p>
     <p>-combat</p>
    </div>
    <div className="col">
      <p>Stats fuerte : {strongestStat(team)}</p>
     <p>peso promedio: {`${averageWeight(team)} kg`}</p>
     <p>altura promedio: {`${averageHeight(team)} cm`}</p>
    </div>
   </div>
  </div>
 );
}

export default HomeStats;
