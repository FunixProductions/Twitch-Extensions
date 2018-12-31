var tickRate = 60000 // On vérifiera l'api toutes les minutes

function checkStream() {
    var xhr = new XMLHttpRequest()
    xhr.setRequestHeader('Client_ID', 'ukwmaut3y0g822wza1mib08auy40cw')
    xhr.open("GET", "https://api.twitch.tv/kraken/streams/LeFresechReream?client_id=08922ax6vgljagb8hewjbb8bchbidf", true)
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4) {
            var data = JSON.parse(xhr.responseText)
            if(data["stream"] === null){
                chrome.browserAction.setIcon({path:"img/icon_red.png"})
            }else{
                chrome.browserAction.setIcon({path:"img/icon_green.png"})
            }
            // On relance la fonction après X secondes
            setTimeout(checkStream, tickRate)
        }
    }
    xhr.send()
}

// On lance la fonction dès le démarrage
checkStream()