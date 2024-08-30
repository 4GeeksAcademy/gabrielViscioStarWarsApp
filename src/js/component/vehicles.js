import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import lukeSkywalker from "../../img/lukeSkywalker.jpeg";
import FavoritesButton from "./favoritesButton";

const Vehicles = () => {
    const { store } = useContext(Context);

    return (
        <div className="text-center m-auto">
            <h3>Vehículos de Star Wars</h3>
            <div className="overflow-auto">
                <ul className="d-flex flex-nowrap" style={{ width: 'fit-content', padding: '0 10px' }}>
                    {store.vehicles && store.vehicles.map((vehicle, index) => (
                        <li className="card mx-2" style={{ width: '18rem' }} key={index}>
                            <img src={lukeSkywalker} alt={vehicle.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p>UID: {vehicle.uid}</p>
                                <Link to={`/vehicle/${vehicle.uid}`}>
                                    <button className="btn btn-secondary m-2">Descripción</button>
                                </Link>
                                <FavoritesButton character={vehicle} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Vehicles;
