import React, { useState, useEffect } from "react";
import axios from "axios";
import EpisodesCards from "../components/EpisodesCards";
import Button from "../components/Button";
import Spinner from "./../components/Spinner/Spinner";
import "../components/Cards.css";
import "./Episodes.css";

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = `https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad`;
    axios.get(url).then((response) => {
      setTimeout(() => {
        setEpisodes(response.data);
        setLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <>
      <div className="header-episodes">
        <h1>All Episodes</h1>
        <Button path={"/"} content={"Back to Home"} className={"btn"} />
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="episodes-container">
          {episodes.map((episode, index) => {
            return <EpisodesCards key={index} episodio={episode} />;
          })}
        </div>
      )}
    </>
  );
}
