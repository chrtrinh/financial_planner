import React from "react";
import "./CostBreakdownChart.css";

function CostBreakdownChart({ inputData }) {
	let total = 0;
	return (
		<div className="costBreakdownChart">
			<h4>Cost Breakdown</h4>
			<div className="costBreakdownChart__label">
				<div className="costBreakdownChart__label__left">
					<h4>Categories</h4>
				</div>
				<div className="costBreakdownChart__label__right">
					<h4>Price</h4>
				</div>
			</div>

			<div className="costBreakdownChart__data">
				{Object.keys(inputData).map((record) => {
					total += inputData[record];
					return (
						<div
							className="costBreakdownChart__data__records"
							key={record}
						>
							<div className="costBreakdownChart__data__left">
								<h4>{record}</h4>
							</div>
							<div className="costBreakdownChart__data__right">
								<h4>${inputData[record].toFixed(2)}</h4>
							</div>
						</div>
					);
				})}
				<div className="costBreakdownChart__data__left"></div>
				<div className="costBreakdownChart__data__right">
					<h4>Total: ${total}</h4>
				</div>
			</div>
		</div>
	);
}

export default CostBreakdownChart;
