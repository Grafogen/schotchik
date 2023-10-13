import React, {useState} from 'react';
import {Button} from "./components/Button";

type SchyotchicProps={
    chislo:number
    minusChislo:number
}

//incTitle='inc' resetTitle='reset'
export const Schyotchic = (props:SchyotchicProps) => {
    const MinCount=props.minusChislo
    const MaxCount=props.chislo
    const [count, setCount] = useState<number>(MinCount)
    const incHandler = () => {
        if(count<=MaxCount)setCount(count + 1)
    }
    const minusHandler = () => {
        if(count<=MaxCount)setCount(count - 1)
    }
    const resetHandler = () => {
        setCount(0)
    }
    const chislo = {
        color: count === MaxCount ? 'red' : 'black',
    }
    return (
        <div className='counter'>
            <h1 style={chislo} className='chislo'>
                {count}
            </h1>
            <div>
                <Button title={true} disabled={count === MaxCount} onClick={incHandler}>!</Button>
                <Button title={true} disabled={count === MinCount} onClick={minusHandler}>!</Button>
                <Button title={false} disabled={count === MinCount} onClick={resetHandler}>!</Button>
            </div>
        </div>
    );
};

