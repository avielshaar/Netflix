// FullScreenVideo.js
import './FullScreenVideo.scss' ;
import React from "react";
import YouTube from "react-youtube";
import CloseIcon from "@mui/icons-material/Close";
import { useParams } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useNavigate } from 'react-router-dom';

const FullScreenVideo = () => {
  const { videoId } = useParams();
  const history = createBrowserHistory();
  const navigate=useNavigate();
  const handleClose = () => {
    navigate(-1) 
  };

  const opts = {
    height:"100%",
    width:"100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="fullScreenVideo">
      <CloseIcon className="closeButton"  onClick={handleClose} />
      <YouTube        
        videoId={videoId}
        className='youtubeVideo'
        opts={opts}
      />
      
    </div>
  );
};

export default FullScreenVideo;
