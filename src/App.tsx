import React, {useState} from 'react';
import './App.css';
import { Nastroika } from './components/Nastroika';
import {Schyotchic} from "./Schyotchic";

function App() {
    const [chislo, setChislo] = useState(5)
    const [minusChislo, setMinusChislo] = useState(0)
    const [go, setGo] = useState(false)
    return (
        <div className="App">
            <Schyotchic go={go} setGo={setGo} minusChislo={minusChislo} chislo={chislo}/>
            <Nastroika setGo={setGo} go={go}   setChislo={setChislo} setMinusChislo={setMinusChislo} />
        </div>
    );
}

export default App;
