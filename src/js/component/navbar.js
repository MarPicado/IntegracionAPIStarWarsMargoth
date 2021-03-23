import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	//console.log(store);

	const handleDelete = index => {
		console.log("Quiero eliminar el item en el index" + index);
		actions.deleteFavorites(index);
	};

	const showFavorites = () => {
		store.favorites.map((item, index) => {
			console.log("favoritos", store.favorites);
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
						<ul className="dropdown-item">
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									Dropdown
								</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdown">
									<a class="dropdown-item" href="#">
										Action
									</a>
									<a class="dropdown-item" href="#">
										Another action
									</a>
									<div class="dropdown-divider" />
									<a class="dropdown-item" href="#">
										Something else here
									</a>
								</div>
							</li>
							*/este li era para traer la data de showFavorites. Pero hay que trabajar la data de arriba a
							ver si sirve/*
							<li>{showFavorites}</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
