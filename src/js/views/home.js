import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Characters from "../component/characters";
import Vehicles from "../component/vehicles";
import Planets from "../component/planets";

export const Home = () => (
    <div className="text-center mt-5" style={{color:'#FFE81F'}}>
        <h1>Bienvenido a Star Wars</h1>
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
