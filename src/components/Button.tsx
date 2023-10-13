import React from 'react';


type ButtonProps={
    disabled:boolean,
    onClick:()=>void,
    children:React.ReactNode,
    title:boolean
}
export const Button = (props:ButtonProps) => {
    return (
        <button className='but' disabled={props.disabled} onClick={props.onClick}>
            {props.title?'inc':'res'}
        </button>
    );
};

