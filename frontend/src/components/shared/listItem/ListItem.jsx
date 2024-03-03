import React from "react";
import "./ListItem.scss";
import YouTube from "react-youtube";
import { useState } from "react";
import FullScreenVideo from "../fullScreenVideo/FullScreenVideo";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";

const ListItem = ({ content }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [delayedHover, setDelayedHover] = useState(null);
  

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const getYouTubeId = (url) => {
    const match = url.match(
      /[?&]v=([a-zA-Z0-9_-]{11})|youtu\.be\/([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] || match[2] : null;
  };

  const handleMouseEnter = () => {
    // Set a timeout for 1000 milliseconds (1 second)
    const delay = setTimeout(() => {
      setIsHovered(true);
      setDelayedHover(null);
    }, 1000);

    setDelayedHover(delay);
  };

  const handleMouseLeave = () => {
    // Clear the timeout if the mouse leaves before 1 second
    if (delayedHover) {
      clearTimeout(delayedHover);
      setDelayedHover(null);
    }

    // Set isHovered to false
    setIsHovered(false);
  };

  return (
    <div
      className="listItem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isHovered && (
        <img className="img" src={content.img} alt={content.title}></img>
      )}
      {isHovered && (
        <>
         <div>
          <YouTube
            className="youtube"
            videoId={getYouTubeId(content.trailer)}
            opts={opts}
          />
          </div>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowOutlinedIcon fontSize="large" className="icon" />
              <AddOutlinedIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{content.duration}</span>
              <span className="limit">+16</span>
              <span>{content.year}</span>
            </div>
            <div className="desc">
              {content.description.split(" ").slice(0, 20).join(" ") + " ..."}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;