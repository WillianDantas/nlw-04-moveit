// poder ser type ou interface

import { useState } from 'react';

type ButtonProps = {
 color: string;
 children: string;
}

export function Button (props: ButtonProps) {
    const [counter, setCounter] = useState(1);

    function inccrement(){
        setCounter(counter + 1);
    }

     return (
         <button 
         type="button" 
         style={{backgroundColor: props.color}}
         onClick={inccrement}
         >
             {props.children} <span>{counter}</span>
        </button>
     );
}