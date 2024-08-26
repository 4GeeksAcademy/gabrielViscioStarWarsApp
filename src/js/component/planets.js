import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Planets = () => {
    const { store } = useContext(Context);

    return (
        <div className="text-center mt-5">
            <h3>Planetas de Star Wars</h3>
            <div className="container-fluid">
                <ul>
                    {store.planets && store.planets.map((planet, index) => (
                        <li key={index}>
                            <p>{planet.name}</p>
                            <p>UID: {planet.uid}</p>
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

export default Planets;
