import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Hello from countries</h1>
            <div className='countries-container'>

                {countries.map(country => <Country country={country}
                    key={country.cca3}></Country>)
                }
            </div >
        </div>

    );
};

// function Country(props) {
//     return (
//         <div>
//             <h3>Name= {props.name} </h3>
//         </div>
//     )
// }
export default Countries;