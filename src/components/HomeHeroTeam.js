import React from 'react';
import HomeHeroCard from './HomeHeroCard';

const HomeHeroTeam = () => {
 const vamos = [1,2,3,4,5,6];

 return (
  <div className="m-2 p-1 d-flex flex-wrap">
    {
     vamos.map(cardHero => <HomeHeroCard key={cardHero} />)
    }
    
  </div>
 );
}

export default HomeHeroTeam;
