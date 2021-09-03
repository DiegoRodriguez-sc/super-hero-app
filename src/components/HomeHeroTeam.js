import React from 'react';
import { useSelector } from 'react-redux';
import HomeHeroCard from './HomeHeroCard';

const HomeHeroTeam = () => {

 const {good} = useSelector(state => state.heros);
 const {bad} = useSelector(state => state.heros);

 return (
  <div className="m-2 p-1 d-flex flex-wrap">
    { 
     good.length > 0 &&
     good.map(heroGood => <HomeHeroCard key={heroGood} id={heroGood}/>)
    }
    {
     bad.length > 0 &&
     bad.map(heroBad => <HomeHeroCard key={heroBad} id={heroBad}/>)
    }
  </div>
 );
}

export default HomeHeroTeam;
