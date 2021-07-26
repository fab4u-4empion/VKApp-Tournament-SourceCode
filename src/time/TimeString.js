function TimeStr (timestamp, mode) {
    var time = new Date(timestamp * 1000)

    switch (mode) {
        case "day":
            var options = {year: 'numeric', month: 'long', day: 'numeric'};
            options.timeZone = 'UTC';
            return (time.toLocaleDateString('ru-RU', options) + " (UTC)")

        case "time":
            var options = {hour: 'numeric', minute: 'numeric' };
            options.timeZone = 'UTC';
            return ( time.toLocaleDateString('ru-RU', options) + " (UTC)")

        case "dayAndTime":
            var options = {month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            options.timeZone = 'UTC';
            return ( time.toLocaleDateString('ru-RU', options) + " (UTC)")    
            
        default:          
            var options = {month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' }; 
            options.timeZone = 'UTC'; 
            return ( time.toLocaleDateString('ru-RU', options) + " (UTC)"); 
    }  
}

export default TimeStr