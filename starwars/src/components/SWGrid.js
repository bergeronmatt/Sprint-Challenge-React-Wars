import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SWCard from "./SWCard";


export default function SWGrid() {
    
    const [swCharacter, setSwCharacter] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(response =>{
            console.log(response)
            const character = response.data.results;
            console.log(character);
            setSwCharacter(character);
        })
        .catch(err =>{
            console.log(`No data found: ${err}`)
        })
    }, [])

    console.log("state log", swCharacter);

    return(

        <div className = 'container'>
                {swCharacter.map(item =>{
                    return <SWCard key={item} newProp={item}/>
                })}
        </div>

    )

}