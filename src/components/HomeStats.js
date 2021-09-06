import React from 'react';
import { useSelector } from 'react-redux';
import { Pie } from "react-chartjs-2";
import { averageHeight, averageWeight, powerStats, strongestStat } from '../helper/functionsAux';
import { pieChart } from '../helper/chart';
import "../styles/stats.css";

const HomeStats = () => {

 const {team} = useSelector(state => state.heros);
 
 const stat = powerStats(team);
 const names = ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"];
 const colors = ["#00C1D4","#F8485E","#FB9334","#0F52BA","#512D6D","#EEEEEE"];
 const {data,opcions} = pieChart(names,stat,colors);
 const colorStronge = colors[strongestStat(team)];

 return (
  <div className="card text-light mb-3 m-3 p-2 stats">
   <div className="row text-center align-items-center">
    <div className="col-md-6">
     <p><span className="h1">Strong Stat: </span><span style={team.length > 0 ? {color:colorStronge} :{color:"white"}}>{team.length > 0 ?names[strongestStat(team)] : 0}</span></p>
     <p><span className="h1">Average Weight: </span>{`${averageWeight(team)} kg`}</p>
     <p><span className="h1">Average Height: </span>{`${averageHeight(team)} cm`}</p>
    </div>
    <div className="col-md-6 m-auto" style={{maxWidth:"400px"}}>
     <Pie data={data} options={opcions} />
    </div>
   </div>
  </div>
 );
}

export default HomeStats;
