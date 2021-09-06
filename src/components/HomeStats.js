import React from 'react';
import { useSelector } from 'react-redux';
import { Pie } from "react-chartjs-2";
import { averageHeight, averageWeight, powerStats, strongestStat } from '../helper/functionsAux';
import { pieChart } from '../helper/chart';
import "../styles/stats.css";

const HomeStats = () => {

 const {team} = useSelector(state => state.heros);
 
 const stat = powerStats(team);
 const names = ["intelligence", "strength", "speed", "durability", "power", "combat"];
 const colors = ["#003D59","#414A4F","#FB9334","#FE6625","#44857D","#167070"];
 const {data,opcions} = pieChart(names,stat,colors);
 const colorStronge = colors[names[(strongestStat(team))]];

 console.log(stat);

 return (
  <div className="card text-light mb-3 m-3 p-2 stats">
   <div className="row text-center align-items-center">
    <div className="col-md-6">
     <p><span className="h1">Strong Stat: </span><span style={{color:colorStronge}}>{names[strongestStat(team)]}</span></p>
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
