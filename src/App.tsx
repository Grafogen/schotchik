import React, {useState} from 'react';
import './App.css';
import {Schyotchic} from "./Schyotchic";
// import {Nastroika} from "./components/Nastroika";

function App() {
    let [chislo, setChislo] = useState(5)
    let [minusChislo, setMinusChislo] = useState(0)
    const Nastroika = () => {
        let [resChislo, setResChislo] = useState(0)
        let [resMinusChislo, setResMinusChislo] = useState(0)
        const onClickPlusHandler = () => {
            setResChislo(resChislo = resChislo + 1)
        }
        const onClickMinusHandler = () => {
            setResChislo(resChislo = resChislo - 1)
        }
        const onClickPlusNextHandler = () => {
            setResMinusChislo(resMinusChislo = resMinusChislo + 1)
        }
        const onClickMinusNextHandler = () => {
            setResMinusChislo(resMinusChislo = resMinusChislo - 1)
        }
const onClickRes=()=>{
    setChislo(resChislo)
    setMinusChislo(resMinusChislo)

}

        return (
            <div className='nastroika'>
                <div className='maxminznach'>
                    <button className='but' onClick={onClickPlusHandler}>+</button>
                    <button className='but' onClick={onClickMinusHandler}>-</button>
                    <h1>{resChislo}</h1>
                </div>
                <div className='maxminznach'>
                    <button className='but' onClick={onClickPlusNextHandler}>+</button>
                    <button className='but' onClick={onClickMinusNextHandler}>-</button>
                    <h1>{resMinusChislo}</h1>
                </div>
                <div>
                    <button className='but' onClick={onClickRes}>set</button>
                </div>
            </div>
        );
    };
    return (
        <div className="App">
            <Schyotchic minusChislo={minusChislo} chislo={chislo}/>
            <Nastroika />
        </div>
    );
}

export default App;
