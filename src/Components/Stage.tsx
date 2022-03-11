import React, { useState } from 'react';
import { GiFlyingFlag, GiStoneTower, GiWhiteTower } from 'react-icons/gi'
import Battlefield from './Battlefield';
import GameControls from './GameControls';
import Ground from './Ground';
import Unit from './Unit';

export default function Stage(){
    const [units, setUnits] = useState<any[]>([]);
    const [nextUnitId, setNextUnitId] = useState(0);

    function addUnit() {
        setUnits([...units, <Unit id={nextUnitId} />]);
        setNextUnitId(nextUnitId + 1);
    }

    return(
        <div className="stage" tabIndex={0}>
            <GameControls onClick={addUnit} />
            <GiFlyingFlag className="middle-flag" />
            <GiStoneTower className='friendly-tower tower'/>
            <GiWhiteTower className='enemy-tower tower' />
            <Battlefield units={units} />
            <Ground />
        </div>
    );
}