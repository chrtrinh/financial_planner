import "./InputsContainer.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import React, { useEffect, useState } from "react";
import CostBreakdownContainer from "../CostBreakdownContainer/CostBreakdownContainer";

function InputsContainer() {
	const [chart, setChart] = useState({});
	const [income, setIncome] = useState(0.0);
	const [incomeValue, setIncomeValue] = useState("");
	const [valueError, setValueError] = useState(false);
	const [percentage, setPercentage] = useState(100);
	const [updated, setUpdated] = useState(false);

	const checkIfSliceExists = (sliceName) => {
		return chart.hasOwnProperty(sliceName);
	};

	const validateIncomeValueBeforeUpdate = (incomeValue) => {
		if (isNaN(incomeValue) || incomeValue.length === 0) {
			setValueError(true);
			return;
		}
		setValueError(false);
		setIncome(incomeValue);
	};

	const addSlice = (sliceName, value) => {
		let temporaryChart = chart;
		temporaryChart[sliceName] = value;
		console.log(temporaryChart);
		setChart(temporaryChart);
		setUpdated(!updated);
	};

	const deleteSlice = (sliceName) => {
		let filtered = Object.keys(chart)
			.filter((slice) => {
				return slice !== sliceName;
			})
			.reduce((obj, key) => {
				obj[key] = chart[key];
				return obj;
			}, {});
		setChart(filtered);
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
					addSlice={addSlice}
					checkIfSliceExists={checkIfSliceExists}
					chart={chart}
					deleteSlice={deleteSlice}
				/>
			</div>
		</div>
	);
}
export default InputsContainer;
