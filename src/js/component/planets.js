import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import naboo from "../../img/naboo.jpeg";
import FavoritesButton from "./favoritesButton";

const Planets = () => {
    const { store } = useContext(Context);

    return (
        <div className="text-center m-auto" style={{color:'white'}}>
            <h3>Planetas de Star Wars</h3>
            <div className="overflow-auto">
                <ul className="d-flex flex-nowrap" style={{ width: 'fit-content', padding: '0 10px' }}>
                    {store.planets && store.planets.map((planet, index) => (
                        <li className="card mx-2" style={{ width: '18rem' ,backgroundColor:'#2c2c2c',color:'white' }} key={index}>
                            <img src={naboo} alt={planet.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{planet.name}</h5>
                                <p>UID: {planet.uid}</p>
                                <Link to={`/planets/${planet.uid}`}>
                                    <button className="btn btn-secondary m-2">Descripción</button>
                                </Link>
                                <FavoritesButton character={planet} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Planets;
