const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPeople: async () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				const url = "https://swapi.dev/api/people/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ people: data.results });
			},
			loadPlanet: async () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				const url = "https://swapi.dev/api/planets/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data.results });
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorites: fav => {
				setStore({ favorites: getStore().favorites.concat(fav) });
			},
			deleteFavorites: index => {
				const newFavorites = getStore().favorites.filter((item, indice) => {
					return indice !== index;
				});
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
