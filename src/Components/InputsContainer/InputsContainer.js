import "./InputsContainer.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import React, { useState } from "react";
import CostBreakdownContainer from "../CostBreakdownContainer/CostBreakdownContainer";
import SimplePieChart from "../SimplePieChart/SimplePieChart";
import CostBreakdownChart from "../CostBreakdownChart/CostBreakdownChart";

// {
//     sl: 13,
//     house: 13,
//     investment: 13,
//     rent: 12,
//     cc: 5,
//     ent: 5,
//     emergency: 10,
//     food: 5,
//     transport: 5,
//     misc: 4,
//     util: 5,
//     md: 10,
// }

function InputsContainer() {
	const [chart, setChart] = useState({});
	const [chartValues, setChartValues] = useState({});
	const [compiledChartData, setCompiledChartData] = useState({});
	const [income, setIncome] = useState(0);
	const [incomeValue, setIncomeValue] = useState("");
	const [percentError, setPercentError] = useState(false);
	const [percentage, setPercentage] = useState(100);
	const [valueError, setValueError] = useState(false);
	const [visualizationEnable, setVisualizationEnable] = useState(false);

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
		if (percentage - value < 0) {
			setPercentError(true);
		} else {
			let temporaryChart = { ...chart };
			let temporaryChartValue = { ...chartValues };
			temporaryChart[sliceName] = value;
			temporaryChartValue[sliceName] = parseInt(
				income * (value / 100),
				10
			);
			setPercentage((percentage - value).toFixed(2));
			setChart(temporaryChart);
			setChartValues(temporaryChartValue);
			setPercentError(false);
		}
	};

	const deleteSlice = (sliceName) => {
		let percentAdded = chart[sliceName];

		let filteredChart = Object.keys(chart)
			.filter((slice) => {
				return slice !== sliceName;
			})
			.reduce((obj, key) => {
				obj[key] = chart[key];
				return obj;
			}, {});

		let filteredChartValues = Object.keys(chartValues)
			.filter((slice) => {
				return slice !== sliceName;
			})
			.reduce((obj, key) => {
				obj[key] = chartValues[key];
				return obj;
			}, {});

		setChart(filteredChart);
		setChartValues(filteredChartValues);
		setPercentage(parseFloat(percentage) + parseFloat(percentAdded));
	};

	const compileChart = () => {
		let keys = Object.keys(chart);
		let tempCompiledData = {};
		let labels = [];
		let data = [];

		keys.forEach((key) => {
			labels.push(key);
			data.push(chart[key]);
		});

		tempCompiledData["label"] = labels;
		tempCompiledData["data"] = data;

		setCompiledChartData(tempCompiledData);
		setVisualizationEnable(true);
	};

	return (
		<div className="inputsContainer">
			<div className="inputsContainer__left">
				<div className="inputsContainer__top">
					<div className="inputsContainer__top__header">
						<h2>
							Monthly Income: ${parseInt(income, 10).toFixed(2)}
						</h2>
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
									validateIncomeValueBeforeUpdate(
										incomeValue
									);
									setIncomeValue("");
								}}
							>
								Submit
							</Button>
						</Card>
						{valueError ? (
							<h4>Please enter a valid number for income!</h4>
						) : null}
						{percentError ? (
							<h4>Percentage Allocation cannot exceed</h4>
						) : null}
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
			<div className="inputsContainer__right">
				<div className="inputsContainer__chartBuilder">
					<button onClick={compileChart}>Visualize</button>
					{visualizationEnable ? (
						<>
							<Card>
								<SimplePieChart inputData={compiledChartData} />
							</Card>
							<Card>
								<CostBreakdownChart inputData={chartValues} />
							</Card>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
}
export default InputsContainer;
