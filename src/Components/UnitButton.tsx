import React from 'react';
import { GiSwordBrandish } from 'react-icons/gi';
import Unit from './Unit';

export default function UnitButton(props: {onClick: ()=>void}){

    return(
        <button className='unit-button' onClick={props.onClick}>
            <GiSwordBrandish className='knight-icon' />
        </button>
    );
}