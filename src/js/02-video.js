import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

const throttled = throttle((seconds) => {
    localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);

player.on('timeupdate', (evt) => {
    throttled(evt.seconds);
});

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

