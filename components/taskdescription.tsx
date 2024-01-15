'use client'
import React, { useState } from 'react'
import styles from '@/public/styles/modal.module.css'
const TaskDescription = ({ show, onClose, task, updateTask }) => {
    const [title, setTitle] = useState(task?.title || '');
    const [description, setDescription] = useState(task?.description || '');
    const [titleError, setTitleError] = useState('');
    const [date, setDate] = useState(task?.date);

    if (!show) {
        return null;
    }

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);

        if (!newTitle.trim()) {
            setTitleError('Title cannot be empty.');
        } else {
            setTitleError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            setTitleError('Title cannot be empty.');
            return;
        }
        setTitleError('');
        updateTask(task.id, title, description, date);
        onClose();
    }

    return (
        <div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="">
                <div id="modal" aria-hidden="true" className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center">
                    <div className="relative w-full max-w-md px-4 h-full md:h-auto">
                        <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
                            <div className="flex justify-end p-2">
                                <button type="button" onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action={() => handleSubmit(event)}>
                                <div>
                                    <label htmlFor="title" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        value={title}
                                        onChange={handleTitleChange}
                                    />
                                    {titleError && <p className="text-red-500 text-xs italic">{titleError}</p>}

                                </div>
                                <div>
                                    <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Description</label>
                                    <textarea
                                        name="description"
                                        className="bg-gray-50 border h-[100px] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="date" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Date</label>
                                    <input
                                        min={new Date().toJSON().slice(0, 10)}
                                        type="date"
                                        name="date"
                                        id="date"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                        onChange={(e) => setDate(e.target.value)}
                                        value={date}
                                    />
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskDescription