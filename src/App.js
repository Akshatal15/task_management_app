import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("/api/tasks"); // Adjust API URL
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async () => {
    if (!title || !description) {
      alert("Please fill out all fields");
      return;
    }

    try {
      const newTask = { title, description };
      const response = await axios.post("/api/tasks", newTask); // Adjust API URL
      setTasks([...tasks, response.data]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`); // Adjust API URL
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Task Management App</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <textarea
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "100%", padding: "10px" }}
        />
        <button onClick={addTask} style={{ padding: "10px 20px", marginTop: "10px" }}>
          Add Task
        </button>
      </div>
      <div>
        {tasks.map((task) => (
          <div key={task._id} style={{ border: "1px solid #ddd", margin: "10px 0", padding: "10px" }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task._id)} style={{ padding: "5px 10px" }}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
