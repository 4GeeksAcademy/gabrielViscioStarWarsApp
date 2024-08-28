import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";  // Importación correcta de injectContext
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Characters from "./component/characters";
import CharactersDescription from "./component/charapterDescription";
import Planets from "./component/planets";
import Vehicles from "./component/vehicles";
import FavoritesList from "./component/favoritesList";


const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/characters" element={<Characters />} />
                        <Route path="/character/:uid" element={<CharactersDescription />} />
                        <Route path="/vehicles" element={<Vehicles />} />
                        <Route path="/planets" element={<Planets />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/single/:theid" element={<Single />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                        <Route path="/favorites" element={<FavoritesList />} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);  // Aquí se aplica el contexto global
