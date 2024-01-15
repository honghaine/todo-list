'use client'
import Navigation from '@/components/navigation';
import Modal from '@/components/modal';
import React, { useState, useEffect } from 'react';
import Action from '@/components/action';
import TaskList from '@/components/taskList';


function App() {
  const a = [
    {
      "id": "lreoxj98eet0tjd38is",
      "title": "aaa",
      "description": "",
      "completed": false
    },
    {
      "id": "lreoxk6xioqu3si7ykt",
      "title": "bbb",
      "description": "",
      "completed": false
    },
    {
      "id": "lreoxkss01bchzlw1hje",
      "title": "ccc",
      "description": "",
      "completed": false
    },
    {
      "id": "lreoxlf5z7akc63j4j",
      "title": "ddd",
      "description": "",
      "completed": true
    }
  ]

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const [filter, setFilter] = useState<string>('all'); // 'finished', 'pending', 'all'

  const [tasks, setTasks] = useState(() => {
    // Retrieve tasks from local storage
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Save tasks to local storage whenever tasks state changes
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (title === '') return;
    const newTask = { id: generateId(), title, description, date: null, completed: false };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
  };

  const updateTask = (id: string, newTitle: any, newDescription: any, newDate: any) => {
    setTasks((prevTasks: any[]) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title: newTitle, description: newDescription, date: newDate } : task
      )
    );
  }

  const deleteTask = (taskToDelete: { id: string; title: string; description: string; completed: boolean; }) => {
    const updatedTasks = tasks.filter((task: { id: string; title: string; description: string; completed: boolean; }, i: any) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  const toggleStatus = (taskToToggle: { id: string; title: string; description: string; completed: boolean; }) => {
    const updatedTasks = tasks.map((task: { completed: any; id?: string; title?: string; description?: string; }) => {
      if (task === taskToToggle) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <Navigation />
      <Action
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        addTask={addTask}
        filter={filter}
        setFilter={setFilter}
      />
      <hr />
      <TaskList
        updateTask={updateTask}
        tasks={tasks}
        deleteTask={deleteTask}
        toggleStatus={toggleStatus}
        filter={filter}
      />
    </div>
  );
}


export default App;
