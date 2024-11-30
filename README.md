<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Management App - README</title>
</head>
<body>
    <h1>Task Management App</h1>
    <p>A full-stack <strong>Task Management Application</strong> built using the <strong>MERN stack</strong> (MongoDB, Express, React, Node.js). This application allows users to manage tasks efficiently by adding, updating, and deleting tasks. It features a user-friendly interface and performs basic CRUD (Create, Read, Update, Delete) operations.</p>
    
    <hr>

    <h2>Features</h2>
    <ul>
        <li><strong>Task CRUD Operations</strong>: Add, view, update, and delete tasks with a simple interface.</li>
        <li><strong>Responsive Design</strong>: The app is fully responsive and works well across different devices (desktops, tablets, and mobiles).</li>
        <li><strong>Error Handling</strong>: User-friendly error messages for invalid inputs or server issues.</li>
        <li><strong>Confirmation Dialog</strong>: Ask for confirmation before deleting a task to avoid accidental deletions.</li>
        <li><strong>Notifications</strong>: Success messages like “Task added successfully” to inform the user of successful actions.</li>
        <li><strong>UI Enhancements</strong>: Polished design with basic styling for a better user experience.</li>
    </ul>

    <hr>

    <h2>Technologies Used</h2>
    <h3>Frontend:</h3>
    <ul>
        <li><strong>React</strong> with Hooks for dynamic UI and state management.</li>
        <li><strong>CSS</strong> for styling (Bootstrap or custom styles can be used).</li>
    </ul>
    
    <h3>Backend:</h3>
    <ul>
        <li><strong>Node.js</strong> and <strong>Express</strong> for server-side logic.</li>
        <li><strong>MongoDB</strong> for database storage of tasks.</li>
    </ul>

    <hr>

    <h2>Setup Instructions</h2>

    <h3>1. Clone the Repository</h3>
    <pre>
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
    </pre>

    <h3>2. Set Up the Backend</h3>
    <ul>
        <li>Navigate to the backend folder:</li>
        <pre>cd backend</pre>
        <li>Install the required dependencies:</li>
        <pre>npm install</pre>
        <li>Create a <code>.env</code> file in the backend directory with the following variables:</li>
        <pre>
MONGO_URI=mongodb://127.0.0.1:27017/task_management
PORT=5000
        </pre>
    </ul>

    <h3>3. Set Up the Frontend</h3>
    <ul>
        <li>Navigate to the frontend folder:</li>
        <pre>cd frontend</pre>
        <li>Install the required dependencies:</li>
        <pre>npm install</pre>
    </ul>

    <h3>4. Start the Backend Server</h3>
    <pre>npm run dev</pre>
    <p>The server will run on <strong>http://localhost:5000</strong>.</p>

    <h3>5. Start the Frontend Server</h3>
    <pre>npm start</pre>
    <p>The frontend will run on <strong>http://localhost:3000</strong>.</p>

    <hr>

    <h2>Running the Application</h2>
    <ul>
        <li>Open your browser and go to <strong>http://localhost:3000</strong> to interact with the application.</li>
        <li>The backend server at <strong>http://localhost:5000</strong> will handle API requests for task management.</li>
    </ul>

    <hr>

    <h2>Future Enhancements</h2>
    <ul>
        <li><strong>User Authentication</strong>: Implement JWT authentication for login and registration.</li>
        <li><strong>Task Filtering and Sorting</strong>: Allow users to filter tasks based on status or due date.</li>
        <li><strong>File Uploads</strong>: Integrate a feature to attach files to tasks.</li>
        <li><strong>Cloud Storage</strong>: Move the backend database to a cloud provider like MongoDB Atlas.</li>
        <li><strong>UI Improvements</strong>: Add animations and improve the overall look and feel.</li>
    </ul>

    <hr>

    <h2>Contributing</h2>
    <p>Feel free to fork the repository, make changes, and create a pull request. Contributions are always welcome!</p>

    <hr>

    <h2>License</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
</body>
</html>
