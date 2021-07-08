import getLaunchParams from '../getParams/search'
import bridge from "@vkontakte/vk-bridge"

function subscribeResult(tournamentInfo) {
    var subscribe = new Promise((resolve, reject) => {
        var params = getLaunchParams()
        bridge
            .send("VKWebAppAllowNotifications")
            .then(() => {
                var url = `https://wotbtournamentvkapp.ru/vkapp/subscribe?tournament_id=${tournamentInfo.tournament_id}&user_id=${params.vk_user_id}`
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
            .catch(() => {
                reject()
            })             
    })
    return subscribe
}

export default subscribeResult