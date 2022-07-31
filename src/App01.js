//Premiére Partie (sans le BACK)
import React, { useState } from 'react';
import AddTask from './pages/AddTask';
import Header from './pages/Header';
import Tasks from './pages/Tasks';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Food SHOPPING',
      day: 'Feb 10th at 7:30pm',
      reminder: false
    }
  ]);

  //ADD TASK
  const addTask = task => {
    // console.log(task);
    // console.log(id);
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //DELETE TASK
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  //ON TOGGLE
  const onToggle = id => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };
  return (
    <>
      <div className="App">
        <div className="container">
          <Header
            title="Task Tracker"
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={onToggle} />
          ) : (
            'No tasks'
          )}
        </div>
      </div>
    </>
  );
};

export default App;
