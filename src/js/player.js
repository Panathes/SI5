const player = {
    playVideo: function(container, videoId) {
        window.onYouTubePlayerAPIReady = function() {
            player.loadPlayer(container, videoId);
        }
    },
    loadPlayer: function(container, videoId) {
        window.myPlayer = new YT.Player(container, {
            playerVars: {
                autoplay: 1,
                controls: 0,
                disablekb: 1,
                hl: 'en',
                cc_load_policy: 0,
                fs: 0,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3,
            },
            height: '100%',
            width: '100%',
            videoId: videoId,
            events: {
            }
        });
    }
};

const containerId = 'homeVideo';
const videoId = 'ciR47NCPTBo';
player.playVideo(containerId, videoId);
