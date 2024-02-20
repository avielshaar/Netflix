import React, { useEffect, useState } from "react";
import List from "../../components/shared/list/List.jsx";
import axios from "axios";
import Header from "../../components/shared/Header/Header.jsx";
import "./ContentPage.scss";

const ContentPage = (title) => {
  const [genres, setGenres] = useState([])
  const [lists, setLists] = useState([])

  useEffect(() => {
    const getGenres = async () => {
      const genres = await axios.get("/api/v1/content/genres");
      setGenres(genres)
    }

    const getLists = async () => {
      let lists = []
      if (title === "Home") {
        lists = await axios.get("/api/v1/lists");
      } else if (title === "Movies") {
        lists = await axios.get("/api/v1/lists/movies");
      } else if (title === "Series") {
        lists = await axios.get("/api/v1/lists/series");
      } else if (title === "New & Popular") {
        lists = await axios.get("/api/v1/lists/newandpopular");
      }
      setLists(lists);
    };

    getGenres()
    getLists()
  }, [])

  return (
    <div className="page">
      <div className="page-header">
        <Header title={title} genres={genres} />
      </div>
      <div className="page-lists">
        {lists.map((list, index) => (
          <List key={index} data={list}></List>
        ))}
      </div>
    </div>
  );
};

export default ContentPage;
