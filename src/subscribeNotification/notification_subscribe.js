import getLaunchParams from '../getParams/search'
import bridge from "@vkontakte/vk-bridge"

function subscribeResult(tournamentInfo) {
    var subscribe = new Promise((resolve, reject) => {
        var params = getLaunchParams()
        bridge
            .send("VKWebAppAllowNotifications")
            .catch(() => {
                reject()
            })
            .then(() => {
                //tcod
            })

        var url = `https://vkapp/subscribe.php?tournament_id=${tournamentInfo.tournament_id}&user_id=${params.vk_user_id}`
        var request = new XMLHttpRequest()
        request.open('POST', url, true)
        request.send()
        request.onload = () => {
            if (JSON.parse(request.responseText) == 200)
                resolve()
            else
                reject()
        }
        request.onerror = () => {
            reject()
        }
            
            
    })
    return subscribe
}

export default subscribeResult