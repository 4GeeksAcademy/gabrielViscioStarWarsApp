import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Busqueda = () => (
    <div className="text-center mt-5">
        <h3>Hola, bienvenido a Star Wars</h3>
        <div>
            <Link to="/characters">
                <button className="btn btn-primary m-2">Ver Personajes</button>
            </Link>
            <Link to="/planets">
                <button className="btn btn-primary m-2">Ver Planetas</button>
            </Link>
			<Link to="/vehicles">
                <button className="btn btn-primary m-2">Ver Vehícles</button>
            </Link>
        </div>
    </div>
);
