import "./CostBreakdownContainer.css";
import Card from "@material-ui/core/Card";
import React, { useEffect } from "react";
import { Button } from "@material-ui/core";

function CostBreakdownContainer({
	percentage,
	updateSlice,
	checkIfSliceExists,
	inputSlice,
}) {
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
									placeholder="Please enter a percentage"
								/>
								<label>Percentage: </label>
								<input
									type="text"
									placeholder="Please enter a percentage"
								/>
							</div>
							<div className="costBreakdownContainer__header__inputs__right">
								<Button variant="contained" color="primary">
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
					{Object.keys(inputSlice).map((slice) => {
						return (
							<div
								className="costBreakdownContainer__record"
								key={slice}
							>
								<h4>{slice}</h4>
								<h4>{inputSlice[slice]}</h4>
							</div>
						);
					})}
				</div>
			</Card>
		</div>
	);
}

export default CostBreakdownContainer;
