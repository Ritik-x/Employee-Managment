// utils/LocalStorage.jsx

const employees = [
  {
    id: 1,
    first_name: "Amit",
    email: "employee1@example.com",
    password: "123",
    task_count: {
      active: 1,
      new_task: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        task_number: 1,
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Develop Login Feature",
        task_description: "Create a login page for the application.",
        task_date: "2024-10-15",
        category: "Development",
      },
      {
        task_number: 2,
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Bug Fixes",
        task_description: "Fix bugs reported by QA.",
        task_date: "2024-09-30",
        category: "Maintenance",
      }
    ]
  },
  {
    id: 2,
    first_name: "Rohit",
    email: "employee2@example.com",
    password: "123",
    task_count: {
      active: 1,
      new_task: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        task_number: 1,
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Database Optimization",
        task_description: "Optimize database queries for better performance.",
        task_date: "2024-10-18",
        category: "Database",
      },
      {
        task_number: 2,
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Schema Design",
        task_description: "Design schema for new features.",
        task_date: "2024-09-20",
        category: "Development",
      },
      {
        task_number: 3,
        active: false,
        new_task: false,
        completed: true,
        failed: true,
        task_title: "API Integration",
        task_description: "Integrate third-party APIs.",
        task_date: "2024-09-15",
        category: "Integration",
      }
    ]
  },
  {
    id: 3,
    first_name: "Priya",
    email: "employee3@example.com",
    password: "123",
    task_count: {
      active: 1,
      new_task: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        task_number: 1,
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "UI/UX Design",
        task_description: "Design the user interface for the dashboard.",
        task_date: "2024-10-19",
        category: "Design",
      },
      {
        task_number: 2,
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Mockups",
        task_description: "Create mockups for the client meeting.",
        task_date: "2024-09-25",
        category: "Design",
      }
    ]
  },
  {
    id: 4,
    first_name: "Vikram",
    email: "employee4@example.com",
    password: "123",
    task_count: {
      active: 1,
      new_task: 0,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        task_number: 1,
        active: true,
        new_task: false,
        completed: false,
        failed: true,
        task_title: "Testing Features",
        task_description: "Test new features on the staging environment.",
        task_date: "2024-10-17",
        category: "Testing",
      },
      {
        task_number: 2,
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Unit Testing",
        task_description: "Write unit tests for the newly implemented modules.",
        task_date: "2024-09-28",
        category: "Testing",
      }
    ]
  },
  {
    id: 5,
    first_name: "Anjali",
    email: "employee5@example.com",
    password: "123",
    task_count: {
      active: 2,
      new_task: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        task_number: 1,
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Client Documentation",
        task_description: "Prepare documentation for the client's project.",
        task_date: "2024-10-20",
        category: "Documentation",
      },
      {
        task_number: 2,
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Code Review",
        task_description: "Review code written by junior developers.",
        task_date: "2024-09-18",
        category: "Review",
      },
      {
        task_number: 3,
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Client Meeting",
        task_description: "Attend a meeting with the client to discuss requirements.",
        task_date: "2024-10-21",
        category: "Meeting",
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

// Function to set localStorage data for employees and admin
export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

// Function to get data from localStorage
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];
  return { employees, admin };
};
