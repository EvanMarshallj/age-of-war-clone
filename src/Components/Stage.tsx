import React from 'react';
import { GiFlyingFlag, GiStoneTower, GiWhiteTower } from 'react-icons/gi'
import Ground from './Ground';

export default function Stage(){

    return(
        <div className="stage" tabIndex={0}>
            <GiFlyingFlag className="middle-flag" />
            <GiStoneTower className='friendly-tower tower'/>
            <GiWhiteTower className='enemy-tower tower' />
            <Ground />
        </div>
    );
}