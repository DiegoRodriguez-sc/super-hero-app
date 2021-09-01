import React from 'react';

const HomeStats = () => {
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
     <p>peso promedio</p>
     <p>altura promedio</p>
    </div>
   </div>
  </div>
 );
}

export default HomeStats;
