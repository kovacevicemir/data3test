import React from "react";
import { Line } from "react-chartjs-2";
import * as dataSet from "./data/dataSet.json";

const Chart = ({ endDates }) => {

  const data = {
    labels: endDates.map(
      (endDate) => endDate.ExpiryDateLabel
    ),
    datasets: [
      {
        label: "Number of devices",
        data: dataSet.dataset[0].EndDates.map(
          (endDate) => endDate.NumberOfExpiringItems
        ),
        fill: true,
        backgroundColor: "rgb(251,209,74)",
        borderColor: "rgb(251,209,74)",
      },
    ],
  };

  return (
    <div style={{ maxWidth: "1000px", width: "100%" }}>
      <Line data={data} />
    </div>
  );
};

export default Chart;
