import React from "react";
import "./ListItem.scss";
import YouTube from "react-youtube";
import { useState } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";

const ListItem = ({ content }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  const opts = {
    height: '40%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const getYouTubeId = (url) => {
    const match = url.match(
      /[?&]v=([a-zA-Z0-9_-]{11})|youtu\.be\/([a-zA-Z0-9_-]{11})/
    );
    const res = match ? (match[1] || match[2]) : null;
    return res;
  };

  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && (
        <img className="img" src={content.img} alt={content.title}></img>
      )}
      {isHovered && (
        <>
          <YouTube
            className="youtube"
            videoId={getYouTubeId(content.trailer)}
            opts={opts}
          />
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
