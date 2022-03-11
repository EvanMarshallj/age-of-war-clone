import React, { useEffect, useState } from 'react';
import Unit from './Unit';

export default function Battlefield(props: {units: typeof Unit[]}){
    const [units, setUnits] = useState<typeof Unit[]>(props.units);

    useEffect(() => {
        setUnits(props.units)
    }, [props.units]);

    return(
        <div className='battlefield'>
            {units.map((unit, index) =>
                {
                    return <div key={index}>{unit}</div>;
                }
            )}
        </div>
    );
}