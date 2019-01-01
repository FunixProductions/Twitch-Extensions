var xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.twitch.tv/helix/streams?user_login=funixgaming", true)
xhr.setRequestHeader("Client-ID", "ukwmaut3y0g822wza1mib08auy40cw")
xhr.onreadystatechange = function(channel) {
    if (xhr.readyState == 4) {
        var data = JSON.parse(xhr.responseText)
        var elm  = document.getElementById("info")
        var icon = document.getElementById("js-status-icon")
        var text = document.getElementById("js-status-text")
        if (data["data"].length === 0) {
            elm.style.color = "#f7f1e3"
            icon.style.backgroundColor = "#b33939"
            text.style.backgroundColor = "#ff5252"
            elm.innerHTML = "FunixGaming n'est pas en live actuellement."
        } else {
            elm.style.color = "black"
            icon.style.backgroundColor = "#20bf6b"
            text.style.backgroundColor = "#26de81"
            elm.innerHTML = "Viens voir FunixGaming en live maintenant !"
        }
    }
}
xhr.send()