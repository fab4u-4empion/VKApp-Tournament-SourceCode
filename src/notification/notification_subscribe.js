import bridge from "@vkontakte/vk-bridge"

var lastClick = new Date().getTime()
var lastTournament = []

function subscribeResult(tournamentInfo) {
    var subscribe = new Promise((resolve, reject) => {
        var currentTime = new Date().getTime()
        if (currentTime - lastClick > 1500 && lastTournament.indexOf(tournamentInfo.tournament_id) == -1) {
            lastClick = new Date().getTime()
            lastTournament.push(tournamentInfo.tournament_id)
            bridge
            .send("VKWebAppAllowNotifications")
            .then(() => {
                var url = `https://wotbtournamentvkapp.ru/vkapp/subscribe${window.location.search}&tournament_id=${tournamentInfo.tournament_id}`
                var request = new XMLHttpRequest()
                request.open('GET', url, true)
                request.send()
                request.onload = () => {
                    lastTournament.splice(lastTournament.indexOf(tournamentInfo.tournament_id), 1)
                    try {
                        if (JSON.parse(request.responseText) == 200)
                            resolve()
                        else
                            if (JSON.parse(request.responseText) == 300)
                                resolve()
                            else    
                                reject()       
                    } catch (error) {
                        reject()
                    }
                }
                request.onerror = () => {
                    reject()
                }
            })        
        }   
    })
    return subscribe
}

export default subscribeResult