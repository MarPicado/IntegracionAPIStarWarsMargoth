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
			favorites: [],
			people: [],
			planets: []
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
				const url = "https://3000-chocolate-mink-5qp1uwmg.ws-us03.gitpod.io/people";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ people: data });
			},
			loadPlanet: async () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				const url = "https://3000-chocolate-mink-5qp1uwmg.ws-us03.gitpod.io/planet";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data });
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
