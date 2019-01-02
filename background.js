var tickRate = 30000;
var status = 0;

function checkStream() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.twitch.tv/helix/streams?user_login=funixgaming", true);
    xhr.setRequestHeader("Client-ID", "ukwmaut3y0g822wza1mib08auy40cw");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText);
            if (data["data"].length === 0) {
                chrome.browserAction.setIcon({path:"img/red.png"});
                status = 0;
            } else {
                var options = {
                    type: "basic",
                    title: "FunixGaming est en live !",
                    message: "En live : " + data["data"][0]["title"],
                    iconUrl: "img/logo.png"
                };
                chrome.browserAction.setIcon({path:"img/green.png"});
                if (status === '0') {
                    chrome.notifications.create(options);
                    status = 1;
                }
            }
            setTimeout(checkStream, tickRate)
        }
    };
    xhr.send()
}
checkStream();
