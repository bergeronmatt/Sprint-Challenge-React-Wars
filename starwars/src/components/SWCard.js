import React, { useState, useEffect} from 'react';
import Title from "./Title";
import Bio from './Bio';
import styled from "styled-components";
import axios from 'axios';

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

    const[world, setWorld] = useState('')

    useEffect(()=>{

      axios.get(props.newProp.homeworld)
        .then(response => {
          setWorld(response.data.name)
        })

    }, [props.newProp.homeworld])

    return (
      <CardLayout>
      <CharCard>
         <Title name = {props.newProp.name}/>
         <Bio homeworld={world} birth_year={props.newProp.birth_year}/>
      </CharCard>
      </CardLayout>
    );
  };

  export default SWCard;