import React from "react";
import { useContent } from "../../contexts/ContentContext.jsx";
import { useEffect } from "react";
// import Navbar from "../../components/shared/navbar/Navbar.jsx";
import ListItem from "../../components/shared/listItem/ListItem.jsx";
import "./MyListPage.scss";



const MyListPage = () => {
  const { myList, getMyList } = useContent();
  useEffect(() => {
    getMyList();
  }, [myList]);

  return (
    <div className="page">
      {/* <Navbar></Navbar> */}
      <h2>My list:</h2>
      <div className="box">
      {myList.map((content) => (
        <div key={content.title}>
          <ListItem content={content}></ListItem>
        </div>
      ))}
      </div>
    </div>
  );
};

export default MyListPage;
