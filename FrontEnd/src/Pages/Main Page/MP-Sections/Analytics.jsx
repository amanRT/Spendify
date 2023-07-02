import PieChart from "./PieChart";
import { useState } from "react";
import { UserData } from "./Data";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

function Analytics() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Monthly Expense",
        data: UserData.map((data) => data.userExpense),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
        enable: false,
      },
    ],
  });
  return (
    <div className="App">
      <span style={{ width: 100 }}>
        <PieChart chartData={userData} />
      </span>
      <span style={{ width: 200 }}>
        <BarChart chartData={userData} />
      </span>
    </div>
  );
}

export default Analytics;
