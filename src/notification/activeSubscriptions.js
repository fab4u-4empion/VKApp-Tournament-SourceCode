var activeBells

function checkSubscriptions() {
    var activeSubscriptions = new XMLHttpRequest()
    activeSubscriptions.open('GET', `https://wotbtournamentvkapp.ru/vkapp/activeSubscriptions${window.location.search}`, true)
    activeSubscriptions.send()
    activeSubscriptions.onload = () => {
        try {
            activeBells = JSON.parse(activeSubscriptions.responseText)  
            sessionStorage.setItem('activeSubscriptions', JSON.stringify(activeBells))
        } catch (error) {
            console.log(error)
        }
    }
}

export default checkSubscriptions