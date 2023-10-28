import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
type NastroikaPropsType={
    setChislo:(e:number)=>void;
        setMinusChislo:(e:number)=>void
}
export const Nastroika = (props:NastroikaPropsType) => {
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
        const onClickRes=()=>{
            props.setChislo(resChislo)
            props.setMinusChislo(resMinusChislo)
        }

    const onChangeHandlerMax=(e:ChangeEvent<HTMLInputElement>)=>{
        //props.setChislo(+e.currentTarget.value)
        setResChislo(+e.currentTarget.value)
    }

    const onChangeHandlerMin=(e:ChangeEvent<HTMLInputElement>)=>{
       // props.setMinusChislo(+e.currentTarget.value)
        setResMinusChislo(+e.currentTarget.value)
    }

    return (
        <div className='nastroika'>
            <div className='maxminznach'>
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
                <span>Максимальное значение</span>
                <input type='number'  className='but' onChange={onChangeHandlerMax}/>
            </div>
            <div className='maxminznach'>
                <span>Минимальное значение</span>
                <input type='number'  className='but' onChange={onChangeHandlerMin}/>
                </div>
                <button className='but' onClick={onClickRes}>set</button>
        </div>
    );

};
