import React, { useEffect, useState } from 'react';
import { GiStoneTower, GiWhiteTower } from 'react-icons/gi';
import Unit from './Unit';

export default function Battlefield(props: {units: JSX.Element[]}){
    const [units, setUnits] = useState<JSX.Element[]>(props.units);

    useEffect(() => {
        setUnits(props.units)
    }, [props.units]);

    return(
        <div className='battlefield'>
            <GiStoneTower className='friendly-tower tower'/>
            <GiWhiteTower className='enemy-tower tower' />
            {units.map((unit, index) =>
                {
                    return <div key={index}>{unit}</div>;
                }
            )}
        </div>
    );
}