const spanStreamTitle = document.getElementById('twitch-stream-title');
const spanTwitchViewers = document.getElementById('twitch-stream-viewers');
const spanGameName = document.getElementById('twitch-game-name');
const imgMiniaLive = document.getElementById('twitch-stream-minia');
const defaultMiniaLive = '../img/offline.png';
const url = 'https://api.funixgaming.fr/twitch/streams/funix';

let body = {};

function updateDataOnPopup() {
    fetch(url).then(async response => {
        if (response.ok) {
            body = await response.json();

            if (body.data.length === 0) {
                turnOffLive();
            } else {
                updateLiveHtml(body.data[0]);
            }
        }
    });
}

function updateLiveHtml(live) {
    setText(spanStreamTitle, live.title);
    setText(spanTwitchViewers, live.viewer_count.toString());
    setText(spanGameName, live.game_name);
    imgMiniaLive.src = live.thumbnail_url.replace("{width}", "990").replace("{height}", "540");
}

function turnOffLive() {
    setText(spanStreamTitle, 'Hors Ligne');
    setText(spanTwitchViewers, '0');
    setText(spanGameName, 'Hors Ligne');
    imgMiniaLive.src = defaultMiniaLive;
}

function setText(elem, text) {
    elem.textContent = text;
}

updateDataOnPopup();
window.setInterval(updateDataOnPopup, 25000);
