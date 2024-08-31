const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            planets: [], 
            vehicles: [], 
            favorites: [],  
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
                
                    const response = await fetch("https://www.swapi.tech/api/people/", requestOptions);
                    const result = await response.json();
                    const characters = result.results;
            
                
                    const detailedCharactersPromises = characters.map(async (character) => {
                        const detailsResponse = await fetch(character.url, requestOptions);
                        const detailsResult = await detailsResponse.json();
                        return {
                            ...detailsResult.result.properties, 
                            uid: character.uid, 
                            description: detailsResult.result.description 
                        };
                    });
            
                  
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
                    const planets = result.results;
            
                    const detailedPlanetsPromises = planets.map(async (planet) => { 
                        const detailsResponse = await fetch(planet.url, requestOptions); 
                        const detailsResult = await detailsResponse.json();
                        return {
                            ...detailsResult.result.properties, 
                            uid: planet.uid, 
                            description: detailsResult.result.description  
                        };
                    });
            
              
                    const detailedPlanets = await Promise.all(detailedPlanetsPromises);
                    setStore({ planets: detailedPlanets });
                    console.log(detailedPlanets);
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
                    const vehicles = result.results;
            
                
                    const detailedVehiclesPromises = vehicles.map(async (vehicle) => { 
                        const detailsResponse = await fetch(vehicle.url, requestOptions); 
                        const detailsResult = await detailsResponse.json();
                        return {
                            ...detailsResult.result.properties, 
                            uid: vehicle.uid, 
                            description: detailsResult.result.description  
                        };
                    });
            
                 
                    const detailedVehicles = await Promise.all(detailedVehiclesPromises);
                    setStore({ vehicles: detailedVehicles });
                    console.log(detailedVehicles);
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
