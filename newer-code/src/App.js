import React, { Component } from "react";
import Thecountries from './countries.js'
import Nav from './nav'
import "./App.css";
import Countries from "./countries.json";
import Details from "./countryDetails"
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
  state = {
    countries: Countries
  };
  render() {

    return (
      <div className="App">
      <Nav />
      <div class="row">
        <div class="col-5">
          <Thecountries/>
        </div>
        <div class="col-7">
          <Route path="/country/:id" component={Details} /> 

        </div>
      </div>
    </div>
   );
  }
}

