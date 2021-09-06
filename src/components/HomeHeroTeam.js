import React from 'react';
import { useSelector } from 'react-redux';
import HeroCard from './HeroCard';

const HomeHeroTeam = () => {

  const {team} = useSelector(state => state.heros);

 return (
  <div className="m-2 p-1 d-flex flex-wrap justify-content-center">
    { 
     team.length > 0 
     ? team.map(hero => <HeroCard key={hero.id} hero={hero}/>)
     : <div>You don't have a team yet</div>
    }
  </div>
 );
}

export default HomeHeroTeam;
