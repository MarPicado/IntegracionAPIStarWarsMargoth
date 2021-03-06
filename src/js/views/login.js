import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};

		fetch("https://3000-beige-haddock-sxvbt1tp.ws-us03.gitpod.io/login", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				sessionStorage.setItem("my_token", data.token);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="mx-auto pt-5">
			<h1>Login</h1>
			<form onSubmit={handleSubmit} style={{ width: "500px" }}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" className="form-text">
						{/* We won't share your email with anyone else.</p> */}
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<Link to="/mainpage" className="btn btn-dark">
					Submit
				</Link>
			</form>
		</div>
	);
};
