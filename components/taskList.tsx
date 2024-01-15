'use client'
import React, { useState } from 'react'
import TaskDescription from './taskdescription';
import Modal from './modal';

const TaskList = ({ updateTask, tasks, deleteTask, toggleStatus, filter }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);

    const [currentCompletedTask, setCurrentCompletedTask] = useState(null);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

    const openDeleteBox = (task) => {
        setCurrentCompletedTask(task);
        setIsModalDeleteOpen(true);
    }

    const closeDeleteBox = () => {
        setCurrentCompletedTask(null);
        setIsModalDeleteOpen(false);
    }

    const openModal = (task) => {
        setIsModalOpen(true)
        setCurrentTask(task)
    };
    const closeModal = () => {
        setCurrentTask(null)
        setIsModalOpen(false)
    };

    return (
        <div>
            {isModalOpen && <TaskDescription updateTask={updateTask} show={isModalOpen} onClose={closeModal} task={currentTask} />}
            {isModalDeleteOpen && <Modal show={isModalDeleteOpen} onClose={closeDeleteBox} deleteTask={deleteTask} task={currentCompletedTask} />}
            {
                filter === 'pending' || filter === 'finished' ?
                    <div className="flex justify-between gap-10 ">
                        <div className="Pending flex-1">
                            <h2 className="text-center text-2xl mb-4">Pending Tasks</h2>
                            {filter == 'pending' &&
                                <div className='space-y-4 flex justify-center'>
                                    <ul className="">
                                        {tasks.filter((task, index) => { return task.completed === false }).map((task, index) => (
                                            <li draggable key={index} className='mb-6'>
                                                <div className="bg-slate-200 cursor-pointer transition-all duration-500 hover:translate-y-2 w-full h-[100px] rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="checkbox"
                                                            type="checkbox"
                                                            className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                                                            checked={task.completed}
                                                            onChange={() => toggleStatus(task)}
                                                        />
                                                    </div>
                                                    <div onClick={() => openModal(task)} className='w-[600px] flex h-24 flex-col justify-center'>
                                                        <span className="font-bold block overflow-hidden overflow-ellipsis w-[200px] h-[25px]">{task.title}</span>
                                                        <p className="line-clamp-3 w-[500px] overflow-hidden">
                                                            {task.description}
                                                        </p>
                                                    </div>
                                                    <button onClick={() => openDeleteBox(task)} className='border-2 border-red-500 bg-red-500 rounded-full py-2 px-4 transition duration-200 ease-in-out text-base hover:bg-red-600 flex items-center justify-center font-semibold text-white'>Delete</button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className="w-px bg-gray-400 hidden md:block" />
                        <div className="Completed flex-1">
                            <h2 className="text-center text-2xl mb-4">Completed Tasks</h2>
                            {filter == 'finished' &&
                                <div className='space-y-4 flex justify-center'>
                                    <ul className="w-[668px]">
                                        {tasks.filter((task, index) => { return task.completed === true }).map((task, index) => (
                                            <li key={index} className='mb-6'>
                                                <div className="bg-slate-200 cursor-pointer transition-all duration-500 hover:translate-y-2 w-full h-[100px] rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="checkbox"
                                                            type="checkbox"
                                                            className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                                                            checked={task.completed}
                                                            onChange={() => toggleStatus(task)}
                                                        />
                                                    </div>
                                                    <div onClick={() => openModal(task)} className='w-[600px] flex h-24 flex-col justify-center'>
                                                        <span className="font-bold block overflow-hidden overflow-ellipsis w-[200px] h-[25px]">{task.title}</span>
                                                        <p className="line-clamp-3 w-[500px] overflow-hidden">
                                                            {task.description}
                                                        </p>
                                                    </div>
                                                    <button onClick={() => openDeleteBox(task)} className='border-2 border-red-500 bg-red-500 rounded-full py-2 px-4 transition duration-200 ease-in-out text-base hover:bg-red-600 flex items-center justify-center font-semibold text-white'>Delete</button>
                                                </div>

                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </div>
                    </div> :
                    <div className="flex justify-between gap-10 ">
                        <div className="Pending flex-1">
                            <h2 className="text-center text-2xl mb-4">Pending Tasks</h2>
                            <div className='space-y-4 flex justify-center'>
                                <ul className="">
                                    {tasks.filter((task, index) => { return task.completed === false }).map((task, index) => (
                                        <li draggable key={index} className='mb-6'>
                                            <div className="bg-slate-200 cursor-pointer transition-all duration-500 hover:translate-y-2 w-full h-[100px] rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="checkbox"
                                                        type="checkbox"
                                                        className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                                                        checked={task.completed}
                                                        onChange={() => toggleStatus(task)}
                                                    />
                                                </div>
                                                <div onClick={() => openModal(task)} className='w-[600px] flex h-24 flex-col justify-center'>
                                                    <span className="font-bold block overflow-hidden overflow-ellipsis w-[200px] h-[25px]">{task.title}</span>
                                                    <p className="line-clamp-3 w-[500px] overflow-hidden">
                                                        {task.description}
                                                    </p>
                                                </div>
                                                <button onClick={() => openDeleteBox(task)} className='border-2 border-red-500 bg-red-500 rounded-full py-2 px-4 transition duration-200 ease-in-out text-base hover:bg-red-600 flex items-center justify-center font-semibold text-white'>Delete</button>
                                            </div>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="w-px bg-gray-400 hidden md:block" />
                        <div className="Completed flex-1">
                            <h2 className="text-center text-2xl mb-4">Completed Tasks</h2>
                            <div className='space-y-4 flex justify-center'>
                                <ul className="w-[668px]">
                                    {tasks.filter((task, index) => { return task.completed === true }).map((task, index) => (
                                        <li key={index} className='mb-6'>
                                            <div className="bg-slate-200 cursor-pointer transition-all duration-500 hover:translate-y-2 w-full h-[100px] rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="checkbox"
                                                        type="checkbox"
                                                        className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                                                        checked={task.completed}
                                                        onChange={() => toggleStatus(task)}
                                                    />
                                                </div>
                                                <div onClick={() => openModal(task)} className='w-[600px] flex h-24 flex-col justify-center'>
                                                    <span className="font-bold block overflow-hidden overflow-ellipsis w-[200px] h-[25px]">{task.title}</span>
                                                    <p className="line-clamp-3 w-[500px] overflow-hidden">
                                                        {task.description}
                                                    </p>
                                                </div>
                                                <button onClick={() => openDeleteBox(task)} className='border-2 border-red-500 bg-red-500 rounded-full py-2 px-4 transition duration-200 ease-in-out text-base hover:bg-red-600 flex items-center justify-center font-semibold text-white'>Delete</button>
                                            </div>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default TaskList