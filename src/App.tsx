import React, {useState} from 'react';
import './App.css';
import { Nastroika } from './components/Nastroika';
import {Schyotchic} from "./Schyotchic";

function App() {
    let [chislo, setChislo] = useState(5)
    let [minusChislo, setMinusChislo] = useState(0)

    return (
        <div className="App">
            <Schyotchic minusChislo={minusChislo} chislo={chislo}/>
            <Nastroika setChislo={setChislo} setMinusChislo={setMinusChislo} />
        </div>
    );
}

export default App;
