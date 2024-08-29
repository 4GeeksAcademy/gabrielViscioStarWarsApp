import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const PlanetsDescription = () => {
    const { store } = useContext(Context);
    const { uid } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        const selectedPlanet = store.planets.find((plan) => plan.uid === uid);
        setPlanet(selectedPlanet);
    }, [store.planets, uid]);

    return (
        <div className="text-center mt-5">
            <h3>Descripción de {planet?.name}</h3>
            <div className="container-fluid">
                {planet ? (
                    <div className="w-200">
                        <p>Nombre: {planet.name}</p>
                        <p>Clima: {planet.climate}</p>
                        <p>Diámetro: {planet.diameter} km</p>
                        <p>Gravedad: {planet.gravity}</p>
                        <p>Periodo Orbital: {planet.orbital_period} días</p>
                        <p>Periodo de Rotación: {planet.rotation_period} horas</p>
                        <p>Población: {planet.population}</p>
                        <p>Descripción: {planet.description}</p>
                    </div>
                ) : (
                    <p>Cargando planeta...</p>
                )}
                <Link to="/">
                    <button className="btn btn-primary m-2">Principal</button>
                </Link>
            </div>
        </div>
    );
};

export default PlanetsDescription;
