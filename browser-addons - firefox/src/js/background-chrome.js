const url = 'https://api.funixgaming.fr/twitch/streams/funix';

let body = {};

function checkStream() {
    fetch(url).then(async response => {
        if (response.ok) {
            body = await response.json();

            if (body.data.length === 0) {
                firefox.action.setIcon({
                    path: '../icons/app_icon.png'
                });
            } else {
                firefox.action.setIcon({
                    path: '../icons/app_icon_live.png'
                });
            }
        }
    });
}

checkStream();
setInterval(checkStream, 10000);
