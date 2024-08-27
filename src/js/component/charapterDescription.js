import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const CharactersDescription = () => {
    const { store } = useContext(Context);
    const { uid } = useParams();  // Capturamos el UID de la URL
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        // Buscar el personaje por UID
        const selectedCharacter = store.characters.find((char) => char.uid === uid);
        setCharacter(selectedCharacter);
    }, [store.characters, uid]);

    return (
        <div className="text-center mt-5">
            <h3>Descripción de {character?.name}</h3>
            <div className="container-fluid">
                {character ? (
                    <div>
                        <p>Nombre: {character.name}</p>
                        <p>UID: {character.uid}</p>
                        <p>Altura: {character.height}</p>
                        <p>Peso: {character.mass}</p>
                        <p>Color de cabello: {character.hair_color}</p>
                        <p>Color de ojos: {character.eye_color}</p>
                        <p>Año de nacimiento: {character.birth_year}</p>
                        <p>Descripción: {character.description}</p>
                    </div>
                ) : (
                    <p>Cargando personaje...</p>
                )}
                <Link to="/">
                    <button className="btn btn-primary m-2">Principal</button>
                </Link>
            </div>
        </div>
    );
    
};

export default CharactersDescription;
