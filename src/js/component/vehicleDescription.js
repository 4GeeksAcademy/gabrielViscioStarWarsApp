import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const VehiclesDescription = () => {
    const { store } = useContext(Context);
    const { uid } = useParams();
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        const selectedVehicle = store.vehicles.find((vehicle) => vehicle.uid === uid);
        setVehicle(selectedVehicle);
    }, [store.vehicles, uid]);

    return (
        <div className="text-center mt-5">
            <h3>Descripción de {vehicle?.name}</h3>
            <div className="container-fluid">
                {vehicle ? (
                    <div className="w-200">
                        <p>Nombre: {vehicle.name}</p>
                        <p>Modelo: {vehicle.model}</p>
                        <p>Fabricante: {vehicle.manufacturer}</p>
                        <p>Clase de vehículo: {vehicle.vehicle_class}</p>
                        <p>Capacidad de carga: {vehicle.cargo_capacity}</p>
                        <p>Consumibles: {vehicle.consumables}</p>
                        <p>Costo en créditos: {vehicle.cost_in_credits}</p>
                        <p>Cantidad de tripulación: {vehicle.crew}</p>
                        <p>Longitud: {vehicle.length} metros</p>
                        <p>Velocidad máxima: {vehicle.max_atmosphering_speed} km/h</p>
                        <p>Pasajeros: {vehicle.passengers}</p>
                        <p>Descripción: {vehicle.description}</p>
                    </div>
                ) : (
                    <p>Cargando vehículo...</p>
                )}
                <Link to="/">
                    <button className="btn btn-primary m-2">Principal</button>
                </Link>
            </div>
        </div>
    );
};

export default VehiclesDescription;
