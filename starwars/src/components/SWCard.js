import React from 'react';
import Title from "./Title";
import Bio from './Bio';
import styled from "styled-components";

const CharCard = styled.div `

  background: black;
  color:yellow;
  width: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

`

  const SWCard = props => {
    return (
      <CharCard>
         <Title name = {props.newProp.name}/>
         <Bio/>
      </CharCard>
    );
  };

  export default SWCard;