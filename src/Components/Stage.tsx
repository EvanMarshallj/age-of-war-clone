import * as React from 'react';
import backgroundImg from '../Assets/background.jpg';

export default function Stage(){
    const [xPosition, setXPosition] = React.useState(0);
    const [yPosition, setYPosition] = React.useState(0);

    function scroll(event: React.MouseEvent){
        console.log(event);

        setXPosition(event.pageX);
        setYPosition(event.pageY);
        console.log(window.innerWidth);
        console.log(window.innerHeight);
        if(xPosition < window.scrollX + 40){
            window.scroll({
               left: window.scrollX - 20,
               behavior: 'smooth' 
            });
        }
        else if(xPosition > window.innerWidth - 40){
            window.scroll({
               left: window.scrollX + 20,
               behavior: 'smooth' 
            });
        }
    }

    return(
        <div onMouseMove={scroll}>
            <span>{xPosition} {yPosition}</span> 
            <img src={backgroundImg} />
            
        </div>
    );  
}