import React, { useContext } from "react";
import { Context } from "../store/appContext";

const FavoritesList = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown button
                 </button>
                 <ul class="dropdown-menu">
                     <li><a class="dropdown-item" href="#">Action</a></li>
                     <li><a class="dropdown-item" href="#">Another action</a></li>
                     <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
        </div>
            <h2>Your Favorites</h2>
            {store.favorites.length === 0 ? (
                <p>No favorites added yet.</p>
            ) : (
                <ul>
                    {store.favorites.map(favorite => (
                        <li key={favorite.uid}>
                            {favorite.name}
                            <button onClick={() => actions.removeFavorite(favorite.uid)}>
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
