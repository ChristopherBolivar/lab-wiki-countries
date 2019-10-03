import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Countries from "./countries.json";
export default class countryDetails extends Component {
    state = {
        countries: Countries
      };
        findCountryById =(e)=>{
            return this.state.countries.find((country)=>{
            return country.cca3 === e
            })
        }
         
    render() {      
        let myCountry = this.state.countries.find(country => country.cca3 === this.props.match.params.id)    
        let thisCountry = myCountry.borders.map(country =>{return country})
        let listCountry = this.findCountryById(thisCountry)
       console.log(listCountry)
        return (
            <div>
                <h1>{myCountry.name.official}</h1>
                <p>Capital: {myCountry.capital}</p>
                <p>Area: {myCountry.area} km<sup>2</sup></p>
                <p>Borders: <ul> {listCountry} </ul> </p>

            </div>
        )
    }
}
