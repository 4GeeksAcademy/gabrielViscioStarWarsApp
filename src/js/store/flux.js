const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [], // Almacena personajes
            planets: [], // Almacena planetas
            vehicles: [], // Almacena vehículos
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ]
        },
        actions: {
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
                    setStore({ characters: result.results });
                    console.log(result);
                    return result;
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
