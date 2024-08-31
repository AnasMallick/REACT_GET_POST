import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './about';
import Card_list from './card_list';
import Home from './home';
import Card from './card';
import List from './list';
import Api_data from './api_data';
import Api_card from './api_card';
import { Multiform } from './multiform';
import Getdata from './getdata';


export default function RouteData() {
  return (
    <div className="container">
        <Routes>
        <Route Component={Home} path="/">Home</Route>
            <Route Component={About} path="/about">About</Route>
            <Route Component={Card_list} path="/cardlist">CardList</Route>
            <Route Component={List} path="/list">List</Route>
            <Route Component={Api_data} path="/api">Api Data</Route>
            <Route Component={Api_card} path="/api_card">Api Data</Route>
            <Route Component={Multiform} path="/multiform">User Form</Route>
            <Route Component={Getdata} path="/userdata">User Data</Route>

            
        </Routes>
    </div>
  )
}
