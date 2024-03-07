import React, { useEffect, useRef } from 'react';

const IframeComponent = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    console.log('videoId changed:', videoId);

    const loadYouTubeAPI = () => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      tag.onload = () => {
        onYouTubeIframeAPIReady();
      };
    };

    const onYouTubeIframeAPIReady = () => {
      if (window.YT) {
        createPlayer();
      }
    };

    const createPlayer = () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }

      playerRef.current = new window.YT.Player('youtube-player', {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          origin: 'http://localhost:5173',
          playsinline: 1,
          showinfo: 0,
          rel: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          enablejsapi: 1,
          widgetid: 1,
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange,
        },
      });
    };

    const onPlayerReady = (event) => {
      event.target.playVideo();
    };

    const onPlayerStateChange = (event) => {
      console.log('Player State Change:', event.data);

      if (event.data === window.YT.PlayerState.ENDED) {
        playerRef.current.seekTo(0); // Rewind the video to the beginning when it ends
        playerRef.current.playVideo();
      }
    };

    loadYouTubeAPI();

    // Cleanup
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      window.onYouTubeIframeAPIReady = null;
      window.onYouTubeIframeAPIError = null;
    };
  }, [videoId]);

  return <div id="youtube-player" className='iframe-container' />;
};

export default IframeComponent;
