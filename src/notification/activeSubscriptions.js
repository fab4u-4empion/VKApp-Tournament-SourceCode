var activeBells = []

function checkSubscriptions() {
    var activeSubscriptions = new XMLHttpRequest()
    activeSubscriptions.open('GET', `https://wotbtournamentvkapp.ru/vkapp/activeSubscriptions${window.location.search}`, true)
    activeSubscriptions.send()
    activeSubscriptions.onload = () => {
        try {
            activeBells = JSON.parse(activeSubscriptions.responseText)  
        } catch (error) {
            console.log(error)
        }
        sessionStorage.setItem('activeSubscriptions', JSON.stringify(activeBells))
    }
    activeSubscriptions.onerror = () => {
        sessionStorage.setItem('activeSubscriptions', JSON.stringify(activeBells))
    }
}

export default checkSubscriptions