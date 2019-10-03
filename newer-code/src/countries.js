import React, { Component } from "react";
import Countries from "./countries.json";
import { Link } from 'react-router-dom';

export default class thecountries extends Component {
  state = {
    countries: Countries
  };
  listCountries = () => {
    return this.state.countries.map(country => {
      return (
        <li className="card">
          <Link  to={`/country/${country.cca3}`}>{country.flag}{country.name.common}</Link>
        </li>
      );
    });
  };
  render() {
    return <div id="cList">{this.listCountries()}</div>;
  }
}
