import bridge from "@vkontakte/vk-bridge"

function subscribeResult(tournamentInfo) {
    var subscribe = new Promise((resolve, reject) => {
        bridge
            .send("VKWebAppAllowNotifications")
            .then(() => {
                var url = `https://wotbtournamentvkapp.ru/vkapp/subscribe${window.location.search}&tournament_id=${tournamentInfo.tournament_id}`
                var request = new XMLHttpRequest()
                request.open('GET', url, true)
                request.send()
                request.onload = () => {
                    try {
                        if (JSON.parse(request.responseText) == 200)
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
    })
    return subscribe
}

export default subscribeResult