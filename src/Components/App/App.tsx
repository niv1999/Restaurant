import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Item } from '../Item/Item';
import { TakeAway } from '../TakeAway/TakeAway';
import { Copyrights } from '../Copyrights/Copyrights';
import { Desserts } from '../Desserts/Desserts';
import { Branches } from '../Branches/Branches';
import { Logo } from '../Logo/Logo';
import { Specials } from '../Specials/Specials';
import { Clicker } from '../Clicker/Clicker';
import { Clock } from '../Clock/Clock';
import { RandomDish } from '../RandomDish/RandomDish';

function App(): JSX.Element {

    return (
        <div className="App">
            <Clock />
            <h1>JB Restaurant</h1>
            <p>Best restaurant in Tel Aviv</p>
            <RandomDish />
            <Logo />
            <Item />
            <Specials />
            <Clicker />
            <TakeAway />
            <Desserts />
            {/* <Copyrights /> */}
            <Branches />
        </div>
    );
}

export default App;
