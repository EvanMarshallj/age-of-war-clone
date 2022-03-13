import React, { useEffect, useState } from 'react';
import { GiSwordman } from 'react-icons/gi';

export default function Unit(props: {id: number, dieFunction: (id: string)=>void}){
    const [xPosition, setXPosition] = useState(0);
    const [moving, setMoving] = useState(false);
    const [dead, setDead] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {setXPosition(xPosition + 5)}, 15);
        if(xPosition > 4000){ 
            setDead(true);
            props.dieFunction(props.id.toString());
        }
        return () => {
            clearInterval(interval);
        };
    }, [xPosition]);

    return(
        <div className='unit knight' style={{left: xPosition}} id={props.id.toString()} >
            <GiSwordman />
        </div>
    );
}