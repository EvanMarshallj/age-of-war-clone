import React from 'react';
import GameControls from './GameControls';
import Stage from './Stage';

export default function Window(){

    return(
        <div className='window' >
            <Stage />
            <GameControls />
        </div>
    );  
}