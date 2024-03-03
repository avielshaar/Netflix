// FullScreenVideo.js

import React from "react";
import YouTube from "react-youtube";
import CloseIcon from "@mui/icons-material/Close";

const FullScreenVideo = ({ videoId, onClose }) => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="fullScreenVideo">
      <YouTube
        className="youtube"
        videoId={videoId}
        opts={opts}
      />
      <CloseIcon className="closeButton" onClick={onClose} />
    </div>
  );
};

export default FullScreenVideo;
