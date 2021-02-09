import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import axios from "axios";
import "./home.css";
import CharactersCards from "../components/CharactersCards";
import Button from "./../components/Button";

export default function Home(params) {
  const [characters, setCharacters] = useState([]);
  const [personaje, setPersonaje] = useState([]);

  useEffect(() => {
    let url = `https://www.breakingbadapi.com/api/characters?name=${personaje}`;
    axios.get(url).then((response) => {
      setCharacters(response);
    });
  }, [personaje]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function getValue(e) {
    e.preventDefault();
    setPersonaje(e.target.value);
  }

  return (
    <>
      <div className="header-home">
        <h1>Find your favorite character</h1>
        <p>Your favorite character is here</p>
        <Link to="input" smooth={true} duration={1000}>
          <button className="btn btn-small">Find</button>
        </Link>
      </div>
      <div className="main-home">
        <form className="container-search" onSubmit={handleSubmit}>
          <input
            type="text"
            id="input"
            className="container-search-input"
            placeholder="Find your favorite character"
            onChange={(e) => getValue(e)}></input>
        </form>
        <div className="container-search-card">
          {characters.data === undefined || personaje.length === 0 ? (
            <div></div>
          ) : (
            characters.data
              .map((character, index) => {
                return <CharactersCards character={character} key={index} />;
              })
              .splice(0, 3)
          )}
        </div>
        <div className="container-episodios">
          <Button
            path={"/episodes"}
            content={"Visit all episodes"}
            className={"btn"}
          />
        </div>
        <div className="container-personajes">
          <Button
            path={"/characters"}
            content={"Visit all characters"}
            className={"btn"}
          />
        </div>
      </div>
    </>
  );
}
