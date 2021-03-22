import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log(store);

	const handleDelete = index => {
		console.log("Quiero eliminar el item en el index" + index);
		actions.deleteFavorites(index);
	};

	const showFavorites = () => {
		return store.favorites.map((item, index) => {
			return (
				<a
					className="dropdown-item"
					href="#"
					key={index}
					onClick={e => {
						handleDelete(index);
					}}>
					{item}
					<span>
						<i className="fas fa-trash" />
					</span>
				</a>
			);
		});
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
				<Link to="/">
					<img
						src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png"
						width="140"
						height="90"
						alt=""
					/>
				</Link>
			</a>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites <span className="badge badge-light">{store.favorites.length}</span>
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{showFavorites}
					</div>
				</div>
			</div>
		</nav>
	);
};
