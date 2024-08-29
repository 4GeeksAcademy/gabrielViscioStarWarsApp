import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Vehicles = () => {
    const { store } = useContext(Context);

    return (
        <div className="text-center mt-5">
            <h3>Vehículos de Star Wars</h3>
            <div className="container-fluid">
                <ul>
                    {store.vehicles && store.vehicles.map((vehicle, index) => (
                        <li key={index}>
                            <p>{vehicle.name}</p>
                            <p>UID: {vehicle.uid}</p>
                            <Link to={`/vehicle/${vehicle.uid}`}>
                                    <button className="btn btn-secondary m-2">Descripción</button>
                            </Link>
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

export default Vehicles;
