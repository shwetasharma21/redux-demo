import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions";

function App() {
	const myState = useSelector((state) => state.changeTheNumber);
	const dispatch = useDispatch();

	return (
		<div className="container d-flex flex-column  align-items-center justify-content-center vh-100">
			<h1>Increement/Decrement</h1>
			<h4>Using React Redux</h4>
			<div>
				<button
					className="btn btn-danger m-2 p-3"
					onClick={() => dispatch(decNumber())}
				>
					-
				</button>
				<input type="text" className="text-center" value={myState} />
				<button
					className="btn btn-success m-2 p-3"
					onClick={() => dispatch(incNumber())}
				>
					+
				</button>
			</div>
		</div>
	);
}

export default App;
