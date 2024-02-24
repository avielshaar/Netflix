import React from "react";
import "./List.scss";

import { useState, useRef,useEffect } from "react";
import ListItem from "../listItem/ListItem";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const List = ({ data, title }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();
  const itemRef = useRef();

  const handleClick = (direction) => {
   const listItemWidth = itemRef.current.clientWidth;
    const containerWidth = listRef.current.clientWidth;
    const itemsPerPage = Math.floor(containerWidth / listItemWidth);
  
    if (direction === "left") {
      if (slideNumber > 0) {
        setSlideNumber((prev)=>(prev - 1));
      } else {
        setSlideNumber(data.length - itemsPerPage);
      }
    }
  
    if (direction === "right") {
      if (slideNumber < data.length - itemsPerPage) {
        setSlideNumber((prev)=>(prev + 1));
      } else {
        setSlideNumber(0);
      }
    }
    
   
  };
  useEffect(() => {
    const listItemWidth = itemRef.current.clientWidth;
    const containerWidth = listRef.current.clientWidth;
    const itemsPerPage = Math.floor(containerWidth / listItemWidth);
    const translateValue = -slideNumber * listItemWidth;
    listRef.current.style.transform = `translateX(${translateValue}px)`;
  }, [slideNumber]);

  return (
    <div className="list">
      <span className="listTitle">{title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlinedIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          
        />
        <div className="container" ref={listRef}>
          {data.map((content, index) => (
            <div key={content.title} ref={index === 0 ? itemRef : null}>
              <ListItem content={content}></ListItem>
            </div>
          ))}
        </div>
        <ArrowForwardIosOutlinedIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>

    // // <div>
    // {data.map((content) =>(
    // //     <div key={content.id} lg={3} md={4} sm={6} xs={12}>
    // //         <ListItem title={content.title}/>
    // //     </div>
    // // ))}
    // </div>
  );
};

export default List;
