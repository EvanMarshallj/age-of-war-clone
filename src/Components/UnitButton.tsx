import React from 'react';
import ReactDOM from 'react-dom';
import { GiSwordBrandish } from 'react-icons/gi';
import Unit from './Unit';

export default function UnitButton(){

    function handleClick(){
        ReactDOM.render(React.createElement(Unit), document.querySelector('.stage'));
    }

    return(
        <button className='unit-button' onClick={handleClick}>
            <GiSwordBrandish className='knight-icon' />
        </button>
    );
}