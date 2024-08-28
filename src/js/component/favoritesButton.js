import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const FavoritesButton = ({ character }) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(
        store.favorites.some(fav => fav.uid === character.uid)
    );

    const handleFavoriteClick = () => {
        if (isFavorite) {
            actions.removeFavorite(character.uid);
        } else {
            actions.addFavorite(character);
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <button onClick={handleFavoriteClick} className="btn btn-warning m-2">
            {isFavorite ? "Quitar de Favoritos" : "Añadir a Favoritos"}
        </button>
    );
};

export default FavoritesButton;
