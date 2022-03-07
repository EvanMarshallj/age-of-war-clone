import React, { useEffect, useState, KeyboardEvent } from 'react';
import { GiFlyingFlag } from 'react-icons/gi'

export default function Stage(){
    const [scrollLeft, setScrollLeft] = useState(false);

    useEffect(() => {
        if(scrollLeft){
            let stage = document.querySelector<HTMLElement>('.stage');
            stage!.style.transform = "translateX(20px)"; // this is replacing the style completely, need to append
        }
    }, [scrollLeft]);

    function handleKeyDown(event: KeyboardEvent){
        console.log('keypressed');
        if(event.key === 'ArrowLeft'){
            setScrollLeft(true);
        }
    }

    function handleKeyUp(event: KeyboardEvent){
        if(event.key === 'ArrowLeft'){
            setScrollLeft(false);
        }
    }

    return(
        <div className="stage" tabIndex={0}>
            <GiFlyingFlag className="middle-flag" />
        </div>
    );
}