const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            planets: [], 
            vehicles: [], 
            favorites: [],  // Aquí se añade la lista de favoritos
        },
        actions: {
            addFavorite: (character) => {
                const store = getStore();
                if (!store.favorites.some(fav => fav.uid === character.uid)) {
                    setStore({ favorites: [...store.favorites, character] });
                }
            },

            removeFavorite: (uid) => {
                const store = getStore();
                setStore({
                    favorites: store.favorites.filter(fav => fav.uid !== uid)
                });
            },
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getAppiContent: async () => {
                const requestOptions = {
                    method: "GET",
                    redirect: "follow"
                };
            
                try {
                    // Primera llamada: obtener la lista de personajes
                    const response = await fetch("https://www.swapi.tech/api/people/", requestOptions);
                    const result = await response.json();
                    const characters = result.results;
            
                    // Crear un array de promesas para obtener los detalles de cada personaje
                    const detailedCharactersPromises = characters.map(async (character) => {
                        const detailsResponse = await fetch(character.url, requestOptions);
                        const detailsResult = await detailsResponse.json();
                        return {
                            ...detailsResult.result.properties, // Combina las propiedades detalladas
                            uid: character.uid, // Mantén el UID original
                            description: detailsResult.result.description 
                        };
                    });
            
                    // Esperar a que todas las promesas se resuelvan y luego almacenar en el estado
                    const detailedCharacters = await Promise.all(detailedCharactersPromises);
                    setStore({ characters: detailedCharacters });
                    console.log(detailedCharacters);
                } catch (error) {
                    console.error("Error fetching characters:", error);
                }
            },
            

            getAppiContentPlanets: async () => {
                const requestOptions = {
                    method: "GET",
                    redirect: "follow"
                };

                try {
                    const response = await fetch("https://www.swapi.tech/api/planets/", requestOptions);
                    const result = await response.json();
                    setStore({ planets: result.results });
                    console.log(result);
                    return result;
                } catch (error) {
                    console.error("Error fetching planets:", error);
                }
            },

            getAppiContentVehicles: async () => {
                const requestOptions = {
                    method: "GET",
                    redirect: "follow"
                };

                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles/", requestOptions);
                    const result = await response.json();
                    setStore({ vehicles: result.results });
                    console.log(result);
                    return result;
                } catch (error) {
                    console.error("Error fetching vehicles:", error);
                }
            },

            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ demo: demo });
            }
        }
    };
};

export default getState;
