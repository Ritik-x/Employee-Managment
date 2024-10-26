import React from "react";
import Header from "../others/Header";
import TaskNumber from "../others/TaskNumber";
import Tasklist from "../others/Tasklist";

function EmployDashboard({ data }) {
  return (
    <div className="p-10 h-screen">
      <Header data={data} />
      <TaskNumber data={data} />
      <Tasklist data={data} />
    </div>
  );
}

export default EmployDashboard;
