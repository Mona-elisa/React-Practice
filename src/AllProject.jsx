import React from "react";
import FirstProject from './FirstProject';
import SecondProject from './SecondProject';
import ThirdProject from './ThirdProject';
 import FourthProject from './FourthProject';
 import FifthProject from './FifthProject';
function AllProject(){
  return(
    <div> 
      <FirstProject/>
         <SecondProject/>
         <ThirdProject/>
          <FourthProject/>
          <FifthProject/>

    </div>
  )
}
export default AllProject;