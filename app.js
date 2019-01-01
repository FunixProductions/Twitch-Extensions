var xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.twitch.tv/helix/streams?user_login=funixgaming", true)
xhr.setRequestHeader("Client-ID", "ukwmaut3y0g822wza1mib08auy40cw")
xhr.onreadystatechange = function(channel) {
    if (xhr.readyState == 4) {
        var data = JSON.parse(xhr.responseText)
        var elm  = document.getElementById("info")
        if (data["data"].length === 0) {
            elm.style.color = "red"
            elm.innerHTML = "FunixGaming n'est pas en live actuellement :("
        } else {
            elm.style.color = "green"
            elm.innerHTML = "Viens voir FunixGaming en live maintenant !"
        }
    }
}
xhr.send()