import React from "react";
import InputsContainer from "../InputsContainer/InputsContainer";
import "./Home.css";

function Home() {
	return (
		<div className="home">
			<div className="home__left">
				<InputsContainer />
			</div>
			<div className="home__right"></div>
		</div>
	);
}

export default Home;
