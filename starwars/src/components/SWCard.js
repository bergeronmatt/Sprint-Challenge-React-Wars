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
  justify-content: center;
  margin-bottom: 20px;

`
const CardLayout = styled.div`

  display: flex;
  justify-content: space-evenly

`

  const SWCard = props => {
    return (
      <CardLayout>
      <CharCard>
         <Title name = {props.newProp.name}/>
         <Bio/>
      </CharCard>
      </CardLayout>
    );
  };

  export default SWCard;