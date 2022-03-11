import React from 'react';
import UnitButton from './UnitButton';

export default function GameControls(props: {onClick: ()=>void}){

    return(
        <div className='game-controls'>
            <UnitButton onClick={props.onClick}/>
        </div>
    );
}