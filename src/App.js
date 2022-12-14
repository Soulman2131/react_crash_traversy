//On rajoute le FOOTER && le Routage dans ADDTASK

import React, { useEffect, useState } from 'react';
import AddTask from './pages/AddTask';
import Header from './pages/Header';
import Tasks from './pages/Tasks';
import axios from 'axios';
import Footer from './pages/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/Footer/About';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  //USE EFFECT
  useEffect(() => {
    axios
      .get('http://localhost:5000/tasks')
      .then(res => {
        setTasks(res.data);
        // console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  //ADD TASK
  const addTask = data => {
    axios.post('http://localhost:5000/tasks', data).then(res => {
      setTasks([...tasks, data]);
    });
  };

  //DELETE TASK
  const deleteTask = id => {
    axios.delete(`http://localhost:5000/tasks/${id}`).then(() => {
      setTasks(tasks.filter(task => task.id !== id));
    });
  };

  //Fonction FETCH ID
  const fetchTask = async id => {
    const res = await axios.get(`http://localhost:5000/tasks/${id}`);
    const data = res.data;
    // console.log(data);
    return data;
  };

  //ON TOGGLE
  const onToggle = async id => {
    const taskToggle = await fetchTask(id);
    const updTask = { ...taskToggle, reminder: !taskToggle.reminder };
    await axios.put(`http://localhost:5000/tasks/${id}`, updTask).then(res => {
      setTasks(
        tasks.map(task => (task.id === id ? { ...task, reminder: updTask.reminder } : task))
      );
    });

    setTasks(tasks.map(task => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header
            title="Task Tracker"
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {showAddTask && <AddTask onAdd={addTask} />}
                  {tasks.length > 0 ? (
                    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={onToggle} />
                  ) : (
                    'No tasks'
                  )}
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
