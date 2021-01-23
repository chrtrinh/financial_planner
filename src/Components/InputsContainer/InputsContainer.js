import "./InputsContainer.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import React, { useEffect, useState } from "react";
import CostBreakdownContainer from "../CostBreakdownContainer/CostBreakdownContainer";

function InputsContainer() {
	const [inputSlice, setInputSlice] = useState({
		test: "100",
		test2: "20",
	});
	const [loaded, setLoaded] = useState(false);
	const [income, setIncome] = useState(0.0);
	const [incomeValue, setIncomeValue] = useState("");
	const [valueError, setValueError] = useState(false);
	const [percentage, setPercentage] = useState(100);

	useEffect(() => {
		setLoaded(true);
	}, []);

	const updateSlice = (sliceName, value) => {
		let temporarySlice = inputSlice;
		inputSlice[sliceName] = value;
		setInputSlice(temporarySlice);
	};

	const checkIfSliceExists = (sliceName) => {
		return inputSlice.hasOwnProperty(sliceName);
	};

	const validateIncomeValueBeforeUpdate = (incomeValue) => {
		if (isNaN(incomeValue) || incomeValue.length === 0) {
			setValueError(true);
			return;
		}
		setValueError(false);
		setIncome(incomeValue);
	};

	return (
		<div className="inputsContainer">
			<div className="inputsContainer__top">
				<div className="inputsContainer__top__header">
					<h2>Monthly Income: ${parseInt(income, 10).toFixed(2)}</h2>
				</div>
				<div className="inputsContainer__top__body">
					<Card>
						<label>Monthly Income:</label>
						<input
							type="text"
							placeholder="Please enter your income"
							value={incomeValue}
							onChange={(e) => setIncomeValue(e.target.value)}
						/>
						<Button
							variant="contained"
							color="primary"
							onClick={(e) => {
								validateIncomeValueBeforeUpdate(incomeValue);
								setIncomeValue("");
							}}
						>
							Submit
						</Button>
					</Card>
					{valueError ? <h4>Please enter a valid number!</h4> : null}
				</div>
			</div>
			<div className="inputsContainer__bottom">
				<CostBreakdownContainer
					percentage={percentage}
					updateSlice={updateSlice}
					checkIfSliceExists={checkIfSliceExists}
					inputSlice={inputSlice}
				/>
			</div>
		</div>
	);
}
export default InputsContainer;
