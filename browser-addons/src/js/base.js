const divTwitchSelector = document.getElementById('twitch-selector');
const divYouTubeSelector = document.getElementById('youtube-selector');

function _removeCssSelected(div) {
    div.classList.add('not-selected');
}

function _addCssSelected(div) {
    div.classList.remove('not-selected');
}

divTwitchSelector.addEventListener('click', () => {
    _addCssSelected(divTwitchSelector);
    _removeCssSelected(divYouTubeSelector);
});

divYouTubeSelector.addEventListener('click', () => {
    _addCssSelected(divYouTubeSelector);
    _removeCssSelected(divTwitchSelector);
})
