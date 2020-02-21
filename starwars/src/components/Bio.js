import React from 'react';

const Bio = props => {
    return (
        <div>
            <h3>Birth Year: {props.birth_year}</h3>
            <h3>Homeworld: {props.homeworld}</h3>
        </div>
    )
}

export default Bio;