import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

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
            <FontAwesomeIcon icon={isFavorite ? solidHeart : regularHeart} />
        </button>
    );
};

export default FavoritesButton;
