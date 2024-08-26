import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Characters = () => {
    const { store } = useContext(Context);

    return (
        <div className="text-center mt-5">
            <h3>Personajes de Star Wars</h3>
            <div className="container-fluid">
                <ul>
                    {store.characters && store.characters.map((character, index) => (
                        <li key={index}>
                            <p>{character.name}</p>
                            <p>UID: {character.uid}</p>
                            <button className="btn btn-secondary m-2">Descripción</button>
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
