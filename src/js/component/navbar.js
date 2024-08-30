import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/nav.css";  // Importa el archivo CSS

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light mb-3 justify-content-around">
            <Link to="/" className="text-decoration-none">
                <h1 className="navbar-brand">Star Wars</h1>
            </Link>
           
            <Link to="/" className="text-decoration-none">
                <h3 className="navbar-home">HOME</h3>
            </Link>
            <div className="justify-content-end">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favoritos
                    </button>
                    <ul className="dropdown-menu">
                        {store.favorites.length === 0 ? (
                            <li><span className="dropdown-item">No favorites added yet.</span></li>
                        ) : (
                            store.favorites.map((favorite, index) => (
                                <li key={index} className="d-flex justify-content-between align-items-center">
                                    <Link className="dropdown-item" to={`/character/${favorite.uid}`}>
                                        {favorite.name}
                                    </Link>
                                    <button
                                        className="btn btn-link text-danger p-0 m-0"
                                        onClick={() => actions.removeFavorite(favorite.uid)}
                                    >
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
                <Link to="/busqueda">
                    <button className="btn btn-primary m-2">Busqueda</button>
                </Link>
            </div>
        </nav>
    );
};
