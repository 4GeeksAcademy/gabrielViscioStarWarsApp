import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import lukeSkywalker from "../../img/lukeSkywalker.jpeg";
import FavoritesButton from "./favoritesButton";

const Characters = () => {
    const { store } = useContext(Context);

    return (
        <div className="text-center m-auto">
            <h3>Personajes de Star Wars</h3>
            <div className="container-fluid">
                <ul className="d-flex row wrap">
                    {store.characters && store.characters.map((character, index) => (
                        <li className="card"  style={{width: '18rem',}} key={index}>
                            <img src={lukeSkywalker} alt={character.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <p>genero:{character.gender}</p>
                                <p>Color de cabello: {character.hair_color}</p>
                                <p>Color de ojos: {character.eye_color}</p>
                                <Link to={`/character/${character.uid}`}>
                                    <button className="btn btn-secondary m-2">Descripción</button>
                                </Link>
                                <FavoritesButton character={character} />
                            </div>
                        </li>
                    ))}
                </ul>
                <Link to="/">
                    <button className="btn btn-primary m-2">Principal</button>
                </Link>
            </div>
        </div>
    );
};

export default Characters;
