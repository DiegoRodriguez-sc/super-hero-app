
export const pieChart =(names,dat ,colors) =>{

  
  const data ={
     labels:names,
     datasets:[{
       data:dat,
       backgroundColor:colors
     }]
  };
 
  const opcions={
     responsive:true
  };

  return{
    data,
    opcions
  }
};