import React, { useContext } from "react";
import { Context } from "../store/appContext";

const FavoritesList = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <h2>Your Favorites</h2>
            {store.favorites.length === 0 ? (
                <p>No favorites added yet.</p>
            ) : (
                <ul>
                    {store.favorites.map(favorite => (
                        <li key={favorite.uid}>
                            {favorite.name}
                            <button onClick={() => actions.removeFavorite(favorite)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FavoritesList;
