import React, {ChangeEvent, useState} from 'react';

type NastroikaPropsType = {
    setChislo: (e: number) => void;
    setMinusChislo: (e: number) => void;
    go: boolean;

    setGo: (go: boolean) => void
}
export const Nastroika: React.FC<NastroikaPropsType> = ({go, ...props}) => {
    let [resChislo, setResChislo] = useState(0)
    let [resMinusChislo, setResMinusChislo] = useState(0)
    // const onClickPlusHandler = () => {
    //     setResChislo(resChislo = resChislo + 1)
    // }
    // const onClickMinusHandler = () => {
    //     setResChislo(resChislo = resChislo - 1)
    // }
    // const onClickPlusNextHandler = () => {
    //     setResMinusChislo(resMinusChislo = resMinusChislo + 1)
    // }
    // const onClickMinusNextHandler = () => {
    //     setResMinusChislo(resMinusChislo = resMinusChislo - 1)
    // }
    const onClickRes = () => {
        props.setChislo(resChislo)
        props.setMinusChislo(resMinusChislo)
    }


    const nastroika = {
        borderRadius: '15px',
        width: '500px',
        backgroundColor: '#5042e1',
        height: '100%',
        textAlign: 'center' as 'center',
        margin: '0 auto',
        display: go ? 'flex' : 'none',
        flexDirection: 'column' as 'column',
        justifyContent: 'center' as 'center',
        flexWrap: 'wrap-reverse' as 'wrap-reverse',
        border: '2px solid #121a2d',
    }
    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        //props.setChislo(+e.currentTarget.value)
        setResChislo(+e.currentTarget.value)
    }
    const onChangeHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        // props.setMinusChislo(+e.currentTarget.value)
        setResMinusChislo(+e.currentTarget.value)
    }
    const onClickGo = () => {
        props.setGo(!go)
    }

    return (
        <div style={nastroika}>
            <div className='container'>
                {/*    <button className='but' onClick={onClickPlusHandler}>+</button>*/}
                {/*    <button className='but' onClick={onClickMinusHandler}>-</button>*/}
                {/*    <input value={resChislo}/>*/}
                {/*</div>*/}
                {/*<div className='maxminznach'>*/}
                {/*    <button className='but' onClick={onClickPlusNextHandler}>+</button>*/}
                {/*    <button className='but' onClick={onClickMinusNextHandler}>-</button>*/}
                {/*    <input value={resMinusChislo}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <button className='but' onClick={onClickRes}>set</button>*/}
                <div className='maxminznach'>
                    <span> Максимальное значение</span>
                    <input type='number' className='but' onChange={onChangeHandlerMax}/>
                </div>
                <div className='maxminznach'>
                    <span>Минимальное значение</span>
                    <input type='number' className='but' onChange={onChangeHandlerMin}/>
                </div>
                <div >
                    <button className='but' onClick={onClickRes}>set</button>
                    <button className='but' onClick={onClickGo}>В счётчик</button>
                </div>
            </div>
        </div>
    );

};
