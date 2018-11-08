chrome.browserAction.onClicked.addListener( clickHandler )

function clickHandler( ev ) {
    const opciones = {
        'active'  : true,
        'windowId': chrome.windows.WINDOW_ID_CURRENT
    }
    chrome.tabs.query( opciones,
        function( tabs ){

            const tabActiva = tabs[0]
            console.log( tabActiva )
            const url    = tabActiva.url
            const titulo = tabActiva.title
            const twUrl  = `https://twitter.com/intent/tweet`
            const texto  = `Les comparto esta url: ${titulo}`
            const tabUrl = `${twUrl}?text=${texto}&url=${url}&via=TweetThis`
            
            chrome.tabs.create({ url: tabUrl })

        } 
    )
} 