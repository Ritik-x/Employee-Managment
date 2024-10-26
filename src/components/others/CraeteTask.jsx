import React, { useState } from "react";

function CreateTask() {
  const [taskTitle, setTaskTitle] = useState(""); // Corrected typo
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState(""); // Corrected typo
  const [taskAssignTo, setTaskAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [task, setTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    // Create task object
    const newTask = {
      active: false,
      new_task: true,
      completed: false,
      failed: false,
      taskAssignTo,
      taskDescription,
      taskTitle,
      taskDate,
      category,
    };

    console.log("New Task: ", newTask); // Log the task object to verify

    // Retrieve employees from localStorage
    const data = localStorage.getItem("employees");
    const employees = data ? JSON.parse(data) : [];

    // Find the assigned employee
    const employeeIndex = employees.findIndex(
      (emp) => emp.first_name === taskAssignTo
    );

    if (employeeIndex !== -1) {
      // Add the task to the employee's task list
      const employee = employees[employeeIndex];
      if (!employee.tasks) {
        employee.tasks = []; // Initialize the tasks array if not present
      }
      employee.tasks.push(newTask);

      // Save the updated employee data to localStorage
      employees[employeeIndex] = employee;
      localStorage.setItem("employees", JSON.stringify(employees));

      console.log("Updated employee list: ", employees);
    } else {
      alert("Employee not found");
    }



    // Clear form
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setTaskAssignTo("");
    setCategory("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="flex flex-wrap items-start justify-between w-full">
        <div className="w-1/2 mt-5">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="bg-transparent text-sm py-1 px-3 w-4/5 outline-none border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Enter Task Title"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="bg-transparent text-sm py-1 px-3 w-4/5 outline-none border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={taskAssignTo}
              onChange={(e) => setTaskAssignTo(e.target.value)}
              className="bg-transparent text-sm py-1 px-3 w-4/5 outline-none border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-transparent text-sm py-1 px-3 w-4/5 outline-none border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, Development, etc."
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start mt-5">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-46 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            placeholder="Enter task description"
            required
          ></textarea>

          <button
            type="submit"
            className="text-sm mt-4 px-5 rounded py-3 bg-emerald-400 hover:bg-emerald-800"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
