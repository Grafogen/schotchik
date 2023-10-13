import React from 'react';

export type ButtonProps={
    disabled:boolean
    onClick:()=>void
}

 export const ButtonApp = (props:ButtonProps) => {
    return (
        <div>
            <button></button>
        </div>
    );
};

