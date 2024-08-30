import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Characters from "../component/characters";
import Vehicles from "../component/vehicles";
import Planets from "../component/planets";

export const Home = () => (
    <div className="text-center mt-5">
        <h3>Hola, bienvenido a Star Wars</h3>
        <div>
            <Characters />
            <Planets />
            <Vehicles />
        </div>
            <Link to="/busqueda">
                <button className="btn btn-primary m-2">Busqueda</button>
            </Link>
       
    </div>
);
