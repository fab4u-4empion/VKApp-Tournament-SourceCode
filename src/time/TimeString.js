function TimeStr (timestamp, mode) {
    var time = new Date(timestamp * 1000)

    switch (mode) {
        case "day":
            var options = {year: 'numeric', month: 'long', day: 'numeric'};
            options.timeZone = 'Europe/Moscow';
            return (time.toLocaleDateString('ru-RU', options) + " (МСК)")

        case "time":
            var options = {hour: 'numeric', minute: 'numeric' };
            options.timeZone = 'Europe/Moscow';
            return ( time.toLocaleDateString('ru-RU', options) + " (МСК)")

        case "dayAndTime":
            var options = {month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            options.timeZone = 'Europe/Moscow';
            return ( time.toLocaleDateString('ru-RU', options) + " (МСК)")    
            
        default:          
            var options = {month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' }; 
            options.timeZone = 'Europe/Moscow'; 
            return ( time.toLocaleDateString('ru-RU', options) + " (МСК)"); 
    }  
}

export default TimeStr