import React, { useState } from 'react';
import { GiFlyingFlag } from 'react-icons/gi'
import Battlefield from './Battlefield';
import GameControls from './GameControls';
import Ground from './Ground';
import Unit from './Unit';

export default function Stage(){
    const [units, setUnits] = useState<JSX.Element[]>([]);
    const [nextUnitId, setNextUnitId] = useState(0);

    function onDeath(id: string){
        setUnits(units.filter(unit => unit.key != id));
    }

    function addUnit() {
        setUnits([...units, <Unit id={nextUnitId} dieFunction={onDeath} />]);
        setNextUnitId(nextUnitId + 1);
    }

    return(
        <div className="stage" tabIndex={0}>
            <GameControls onClick={addUnit} />
            <GiFlyingFlag className="middle-flag" />
            <Battlefield units={units} />
            <Ground />
        </div>
    );
}