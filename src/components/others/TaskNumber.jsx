import React from "react";

function TaskNumber({ data }) {
  return (
    <div className="w-screen flex flex-col sm:flex-row justify-between gap-6">
      <div className="w-full sm:w-[40%] py-5 px-8 rounded-2xl hover:bg-red-800 bg-red-400">
        <h2 className="text-3xl font-semibold">{data.task_count.new_task}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-full sm:w-[40%] py-5 px-8 rounded-2xl hover:bg-green-800 bg-green-400">
        <h2 className="text-3xl font-semibold">{data.task_count.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="w-full sm:w-[40%] py-5 px-8 rounded-2xl hover:bg-blue-800 bg-blue-400">
        <h2 className="text-3xl font-semibold">{data.task_count.active}</h2>
        <h3 className="text-xl text-black font-medium">Accepted Task</h3>
      </div>
      <div className="w-full sm:w-[40%] py-5 px-8 rounded-2xl hover:bg-yellow-800 bg-yellow-400">
        <h2 className="text-3xl font-semibold">{data.task_count.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskNumber;
