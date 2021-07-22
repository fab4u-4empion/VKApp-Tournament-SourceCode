function getLaunchParams() {
    return launchParams = 
        window
            .location
            .search
            .replace('?', '')
            .split('&')
            .reduce(
                (p, e) => {
                    var a = e.split('=')
                    p[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
                    return p
                },
                {}
            )
}

export default getLaunchParams