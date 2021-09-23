import React from 'react';
import HomeHeroTeam from '../components/HomeHeroTeam';
import HomeStats from '../components/HomeStats';




const HomeScreen = () => {
 return (
  <div className="home">
   <HomeStats />
   <HomeHeroTeam />
  </div>
 );
}

export default HomeScreen;
