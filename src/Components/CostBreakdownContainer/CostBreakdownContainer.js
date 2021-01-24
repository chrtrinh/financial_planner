import "./CostBreakdownContainer.css";
import Card from "@material-ui/core/Card";
import React, { useState } from "react";
import { Button } from "@material-ui/core";

function CostBreakdownContainer({
	addSlice,
	checkIfSliceExists,
	chart,
	deleteSlice,
	percentage,
}) {
	const [category, setCategory] = useState("");
	const [percent, setPercent] = useState("");

	const handleSubmit = () => {
		if (checkIfSliceExists(category)) {
			return;
		}
		addSlice(category, percent);
		setCategory("");
		setPercent("");
	};

	return (
		<div className="costBreakdownContainer">
			<Card>
				<div className="costBreakdownContainer__header">
					<div className="costBreakdownContainer__header__inputs">
						<div className="costBreakdownContainer__header__inputs__container">
							<div className="costBreakdownContainer__header__inputs__left">
								<label>Category: </label>
								<input
									type="text"
									placeholder="Please enter a category"
									value={category}
									onChange={(e) =>
										setCategory(e.target.value)
									}
								/>
								<label>Percentage: </label>
								<input
									type="text"
									placeholder="Please enter a percentage"
									value={percent}
									onChange={(e) => setPercent(e.target.value)}
								/>
							</div>
							<div className="costBreakdownContainer__header__inputs__right">
								<Button
									variant="contained"
									color="primary"
									onClick={handleSubmit}
								>
									Submit
								</Button>
							</div>
						</div>
					</div>

					<div className="constBreakdownContainer__usage">
						<h5>Remaining: {percentage}%</h5>
					</div>
				</div>
				<div className="costBreakdownContainer__body">
					{Object.keys(chart).map((slice) => {
						return (
							<div
								className="costBreakdownContainer__record"
								key={slice}
							>
								<div className="costBreakdownContainer__record__left">
									<div className="costBreakdownContainer__record__category">
										<h4>Category: {slice}</h4>
									</div>
									<div className="costBreakdownContainer__record__percentage">
										<h4>
											Percentage Allocated: {chart[slice]}
											%
										</h4>
									</div>
								</div>

								<div className="costBreakdownContainer__record__right">
									<button
										onClick={(e, slice) => {
											deleteSlice(e.target.value);
										}}
										value={slice}
									>
										Delete
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</Card>
		</div>
	);
}

export default CostBreakdownContainer;
