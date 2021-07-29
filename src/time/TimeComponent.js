import React from 'react';

function Time(props) {

    var time = new Date((props.timestamp) * 1000);

    switch (props.mode) {
        case "day":
            var options = {year: 'numeric', month: 'long', day: 'numeric'};
            options.timeZone = 'Europe/Moscow';
            return ( <span>{time.toLocaleDateString('ru-RU', options)}</span> )

        case "time":
            var options = {hour: 'numeric', minute: 'numeric' };
            options.timeZone = 'Europe/Moscow';
            return ( <span>{ time.toLocaleDateString('ru-RU', options)}<span style={{fontSize: "12px"}}> (МСК)</span></span> )

        case "dayAndTime":
            var options = {month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            options.timeZone = 'Europe/Moscow';
            return ( <span>{ time.toLocaleDateString('ru-RU', options)}<span style={{fontSize: "12px"}}> (МСК)</span></span> )    
            
        default:            
            var options = {month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' }; 
            options.timeZone = 'Europe/Moscow';
            return ( <span>{ time.toLocaleDateString('ru-RU', options)}<span style={{fontSize: "12px"}}> (МСК)</span></span> ); 
    }  
}

export default Time