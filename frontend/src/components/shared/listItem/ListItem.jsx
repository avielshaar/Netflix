import React from "react";
import "./ListItem.scss";
import YouTube from "react-youtube";
import { useState,useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FullScreenVideo from "../fullScreenVideo/FullScreenVideo";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { useUser } from '../../../contexts/UserContext.jsx';

const ListItem = ({ content }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [delayedHover, setDelayedHover] = useState(null);
  const { get, save, remove } = useUser();
  const userInfo = get();

 
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      
    },
  };

  const getYouTubeId = (url) => {
    const match = url.match(
      /[?&]v=([a-zA-Z0-9_-]{11})|youtu\.be\/([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] || match[2] : null;
  };
  const videoID=getYouTubeId(content.trailer);

  const handleMouseEnter = () => {
    const delay = setTimeout(() => {
      setIsHovered(true);
      setDelayedHover(null);
    }, 500);

    setDelayedHover(delay);
  };

  const handleMouseLeave = () => {
    
    if (delayedHover) {
      clearTimeout(delayedHover);
      setDelayedHover(null);
    }
    setIsHovered(false);
  };
  const addItemToMyList=async() => {
    
    const { data } = await axios.post(`/api/v1/users/addtolist/${content._id}`,userInfo._id,{
      headers: { authorization: `Bearer ${userInfo.token}` },
    });

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
            videoId={videoID}
            opts={opts}
          />
          </div>
          <div className="itemInfo">
            <div className="icons">
              <Link to={`/fullscreen/${videoID}`}>
              <PlayArrowOutlinedIcon fontSize="large" className="icon"  />
              </Link>
              <AddOutlinedIcon className="icon" onClick={addItemToMyList} />
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