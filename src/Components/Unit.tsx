import React, { useEffect, useState } from 'react';
import { GiSwordman } from 'react-icons/gi';

export default function Unit(props: {id: number}){
    const [xPosition, setXPosition] = useState(0);
    const [moving, setMoving] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {setXPosition(xPosition + 10)}, 10);
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