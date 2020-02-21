import React from 'react';
import Title from "./Title";
import Bio from './Bio';
  
  const SWCard = props => {
    return (
      <div>
         <Title name = {props.newProp.name}/>
         <Bio/>
      </div>
    );
  };

  export default SWCard;