import React from "react";
import { Pie } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import "./SimplePieChart.css";

function SimplePieChart({ inputData }) {
	return (
		<div className="simplePieChart">
			{inputData.label.length === 0 ? (
				<h4>Awaiting Data...</h4>
			) : (
				<Pie
					data={{
						labels: inputData.label,
						datasets: [
							{
								data: inputData.data,
								backgroundColor: [
									"#222B6D",
									"#bda9e3",
									"#a99ede",
									"#9574D2",
									"#8992da",
									"#6174d1",
									"#7c90db",
									"#787eb7",
									"#736b92",
									"#3643AB",
									"#D1B4E8",
									"#3D297A",
								],
								borderColor: [
									"#222B6D",
									"#bda9e3",
									"#a99ede",
									"#9574D2",
									"#8992da",
									"#6174d1",
									"#7c90db",
									"#787eb7",
									"#736b92",
									"#3643AB",
									"#D1B4E8",
									"#3D297A",
								],
								borderWidth: 1,
								borderColor: "white",
							},
						],
					}}
					options={{
						responsive: true,
						legend: {
							position: "right",
							labels: {
								fontSize: 15,
							},
						},
						plugins: {
							datalabels: {
								color: "white",
								anchor: "end",
								align: "start",
								formatter: (value) => {
									return value + " %";
								},
							},
						},
					}}
					height={300}
					width={800}
				></Pie>
			)}
		</div>
	);
}

export default SimplePieChart;
