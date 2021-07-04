import React from 'react';

function Time(props) {

    var time = new Date((props.timestamp)*1000);

    var hour = time.getHours();
    var minute = time.getMinutes();
    var day = time.getDate();
    var monthNum = time.getMonth() + 1; 
    var year = time.getFullYear();
    var monthNumeric = monthNum;

    var month = [
        "default",
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
    ];

    if (minute < 10) {
        minute = "0"+minute; 
    }

    if (monthNum < 10) {
        monthNumeric = "0"+monthNum; 
    }

    if (day < 10) {
        day = "0"+day; 
    }

    switch (props.mode) {
        case "day":
            return ( <span>{day+" "+month[monthNum]+" "+ year}</span> )

        case "time":
            return ( <span>{hour+":"+minute}</span> )

        case "dayAndTime":
            return ( <span>{day+"."+monthNumeric+", "+hour+":"+minute}</span> )    
            
        default:            
            return ( <span>{day+"."+monthNumeric+"."+year+", "+hour+":"+minute}</span> ); 
    }  
}

export default Time