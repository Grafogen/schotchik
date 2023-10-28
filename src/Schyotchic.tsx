import React, {useState} from 'react';
import {Button} from "./components/Button";


type SchyotchicProps = {
    chislo: number
    minusChislo: number
    go: boolean
    setGo: (go: boolean) => void
}

export const Schyotchic: React.FC<SchyotchicProps> = ({chislo, minusChislo, go, ...props}) => {

    const [count, setCount] = useState<number>(minusChislo)

    const incHandler = () => {
        if (count <= chislo) setCount(count + 1)
    }


    const counter = {
        border: 'blue',
        borderRadius: '15px',
        width: '400px',
        backgroundColor: '#342c94',
        height: ' 100%',
        margin: '0 auto',
        display: go ? 'none' : 'flex',
        justifyContent: 'center',
        textAlign: 'center' as 'center',
        flexDirection:'column' as'column',
        flexWrap:'wrap-reverse' as 'wrap-reverse'
    }

    const minusHandler = () => {
        if (count <= chislo) setCount(count - 1)
    }
    const resetHandler = () => {
        setCount(minusChislo)
    }
    const res = {
        color: count === chislo ? 'red' : 'black',
    }
    const onClickGo = () => {
        props.setGo(!go)
    }
    return (
        <div style={counter}>

            <h1 style={res} className='chislo'>
                {count}
            </h1>
            <div>
                <Button title={true} disabled={count === chislo} onClick={incHandler}>!</Button>
                <Button title={true} disabled={count === minusChislo} onClick={minusHandler}>!</Button>
                <Button title={false} disabled={count === minusChislo} onClick={resetHandler}>!</Button>
                <button className='but' onClick={onClickGo}>В настройку</button>
            </div>

        </div>
    );
};

