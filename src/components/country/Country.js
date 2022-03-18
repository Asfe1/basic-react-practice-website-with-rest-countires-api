import React from 'react';
import './Country.css'

const Country = (props) => {
    const { flags } = props.country;
    return (

        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Name: {props.country.name.common} </h3>
            <h4>Population: {props.country.population}</h4>
        </div>
    );
};

export default Country;