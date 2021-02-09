import { useState, useEffect } from "react";
import axios from "axios";
import CharactersCards from "../components/CharactersCards";
import Button from "../components/Button";
import Spinner from "./../components/Spinner/Spinner";
import "./Characters.css";

export default function Character() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = "https://www.breakingbadapi.com/api/characters";
    axios.get(url).then((response) => {
      setTimeout(() => {
        setCharacters(response.data);
        setLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <>
      <div className="header-characters">
        <h1>All Characters </h1>
        <Button path={"/"} content={"Back to Home"} className={"btn"} />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="episodes-container">
          {characters.map((character, index) => {
            return <CharactersCards key={index} character={character} />;
          })}
        </div>
      )}
    </>
  );
}
