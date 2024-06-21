import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import Mainpage from "./Mainpage";
import Createnote from "./Createnote";
import Header from "./Header";
import Showpage from "./Showpage";
import Update from "./Update";
import Myprovider from "../context/Myprovider";
import { useState, useEffect } from "react";
import GeminiHelper from "./GeminiHelper";
function Routers() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("usertoken");
		if (token) {
			setIsAuthenticated(true);
		}
	}, []);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Login setIsAuthenticated={setIsAuthenticated} />}
					/>
					<Route path="/registration" element={<Registration />} />
					{isAuthenticated && (
						<Route
							path="/mainpage"
							element={
								<Myprovider>
									<Mainpage />
								</Myprovider>
							}
						>
							<Route path="header" element={<Header />} />
							<Route path="" element={<Showpage />} />
							<Route path="createnote" element={<Createnote />} />
							<Route path="update/:index" element={<Update />} />
						</Route>
					)}
				</Routes>
			</BrowserRouter>
			
		</>
	);
}

export default Routers;
