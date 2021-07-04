function TimeStr (timestamp, mode) {
    var time = new Date(timestamp*1000);

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
        day = "0" + day; 
    }

    switch (mode) {
        case "day":
            return (time.getDate() + " " + month[monthNum] + " " + year)

        case "time":
            return ( hour+":"+minute )

        case "dayAndTime":
            return ( day+"."+monthNumeric+", "+hour+":"+minute )    
            
        default:            
            return ( day+"."+monthNumeric+"."+year+", "+hour+":"+minute); 
    }  
}

export default TimeStr