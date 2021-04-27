import { object } from "prop-types";

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
				const url = "https://3000-beige-haddock-sxvbt1tp.ws-us03.gitpod.io/people";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ people: data });
			},
			loadPlanet: async () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				const url = "https://3000-beige-haddock-sxvbt1tp.ws-us03.gitpod.io/planet";
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
			addFavPlanet: object => {
				let userid = sessionStorage.getItem("userId");
				console.log("Add a planet");
				fetch(`https://3000-beige-haddock-sxvbt1tp.ws-us03.gitpod.io/users/${userid}/favorites`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: sessionStorage.getItem("token")
					},
					body: JSON.stringify(object)
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({
							favorites: [...getStore().favorites, object]
						});
					})
					.catch(err => console.log(err));
			},
			addFavPeople: object => {
				let userid = sessionStorage.getItem("userId");
				console.log("Add a person");
				fetch(`https://3000-beige-haddock-sxvbt1tp.ws-us03.gitpod.io/users/${userid}/favorites`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: sessionStorage.getItem("token")
					},
					body: JSON.stringify(object)
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({
							favorites: [...getStore().favorites, object]
						});
					})
					.catch(err => console.log(err));
			},
			deleteFavPlanet: (planetid, token, userid) => {
				let data = {
					planet_id: planetid
				};
				console.log(data, token, userid, JSON.stringify(data));
				fetch(`https://3000-beige-haddock-sxvbt1tp.ws-us03.gitpod.io/favorite/${tipo}/${favorite_id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: token
					},
					body: JSON.stringify(data)
				})
					.then(response => response.json())
					.then(data => console.log(data));
				setStore({
					favorites: getStore().favorites.filter(item => item.planetid != planetid)
				});
			},
			deleteFavPeople: (peopleid, token, userid) => {
				let data = {
					people_id: peopleid
				};
				console.log(data, token, userid, JSON.stringify(data));
				fetch(`https://3000-beige-haddock-sxvbt1tp.ws-us03.gitpod.io/favorite/${tipo}/${favorite_id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: token
					},
					body: JSON.stringify(data)
				})
					.then(response => response.json())
					.then(data => console.log(data));
				setStore({
					favorites: getStore().favorites.filter(item => item.peopleid != peopleid)
				});
			}
		}
	};
};

export default getState;
