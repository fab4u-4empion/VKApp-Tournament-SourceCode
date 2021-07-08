import getLaunchParams from '../getParams/search'

function unsubscribeResult(tournamentInfo) {
    var unsubscribe = new Promise((resolve, reject) => {
        var params = getLaunchParams()
        var url = `https://wotbtournamentvkapp.ru/vkapp/unsubscribe?tournament_id=${tournamentInfo.tournament_id}&user_id=${params.vk_user_id}`
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
    return unsubscribe
}

export default unsubscribeResult