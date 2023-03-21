const url = 'https://api.funixgaming.fr/twitch/streams/funix';

let body = {};

function setIcon(iconPath) {
    if (navigator.userAgent.indexOf("Firefox") !== -1) {
        browser.action.setIcon({
            path: iconPath
        });
    } else if (navigator.userAgent.indexOf("Chrome") !== -1) {
        chrome.action.setIcon({
            path: iconPath
        });
    }
}

function checkStream() {
    fetch(url).then(async response => {
        if (response.ok) {
            body = await response.json();

            if (body.data.length === 0) {
                setIcon("/src/icons/app_icon.png");
            } else {
                setIcon("/src/icons/app_icon_live.png");
            }
        }
    });
}

checkStream();
setInterval(checkStream, 10000);
