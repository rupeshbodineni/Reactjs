

let App = () => {

  return (
    <div className="container">

      {/* Title */}
      <div className="title">
        <h1>React Dashboard</h1>
      </div>

      {/* Dashboard Layout */}
      <div className="dashboard-layout">

        {/* Sidebar */}
        <div className="sidebar">
          <h2>Dashboard</h2>

          <ul>
            <li>Overview</li>
            <li>Tasks</li>
            <li>Statistics</li>
            <li>Calendar</li>
            <li>Settings</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">

          {/* Stats */}
          <div className="stats-grid">

            <div className="card">
              <h3>Total Tasks</h3>
              <p>24</p>
            </div>

            <div className="card">
              <h3>Completed</h3>
              <p>16</p>
            </div>

            <div className="card">
              <h3>Pending</h3>
              <p>8</p>
            </div>

            <div className="card">
              <h3>Today's Tasks</h3>
              <p>5</p>
            </div>

          </div>

          {/* Task Section */}
          <div className="task-section">

            <h2>Tasks</h2>

            <div className="task-input">
              <input
                type="text"
                placeholder="Add a new task"
              />

              <button>Add</button>
            </div>

            <ul className="task-list">
              <li>Learn React Hooks</li>
              <li>Build Dashboard UI</li>
              <li>Practice useState</li>
              <li>Read React Docs</li>
              <li>Deploy to Netlify</li>
            </ul>

          </div>

          {/* Task Completion */}
          <div className="chart-section">

            <h2>Task Completion</h2>

            <div className="circle">
              <span>66%</span>
            </div>

          </div>

          {/* Filters */}
          <div className="filter-section">

            <ul>
              <li>All</li>
              <li>Completed</li>
              <li>Pending</li>
            </ul>

          </div>

        </div>
      </div>
    </div>
  );
};

export default App;