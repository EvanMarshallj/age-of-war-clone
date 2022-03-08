import React, { useEffect, useState, KeyboardEvent } from 'react';
import { GiFlyingFlag } from 'react-icons/gi'
import Ground from './Ground';

export default function Stage(){

    return(
        <div className="stage" tabIndex={0}>
            <GiFlyingFlag className="middle-flag" />
            <Ground />
        </div>
    );
}