'use client'
import React, { useEffect, useRef, useState } from 'react'
import Modal from './modal'

interface ActionProps {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    addTask: () => void; 
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
  }
  

function Action({ title, setTitle, description, setDescription, addTask, filter, setFilter} : ActionProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const isError = isSubmitted && !title;

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsSubmitted(true);
        if (title) {
            setIsSubmitted(false);
            addTask();
        }
    };

    const handleFilterChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        console.log(e.target.value)
        setFilter(e.target.value); 
    };
    
    const selectAll = () => {
        setFilter('all');
    };
    
    return (
        <div>
            <div className="m-4 flex justify-end gap-3">
                <div className="relative inline-block text-left mt-[16px]">
                    <button onClick={toggleDropdown} className="border-2 border-blue-400 bg-blue-400 text-white bg-beige hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold text-sm py-2 px-6 rounded-lg text-center inline-flex items-center h-[44px] transition duration-300 ease-in-out">
                        Filter
                        <svg className="w-5 h-5 ml-3 transform group-hover:-rotate-180 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {isOpen && (
                        <div className="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioBgHoverButton">
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input 
                                        id="default-radio-4" 
                                        type="radio" 
                                        value="all" 
                                        checked={filter === 'all'}
                                        onClick={handleFilterChange}
                                        name="all" 
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
                                        />
                                        <label htmlFor="default-radio-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                                            All
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input 
                                        id="default-radio-4" 
                                        type="radio" 
                                        name="Finished" 
                                        value="finished" 
                                        checked={filter === 'finished'}
                                        onChange={handleFilterChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
                                        />
                                        <label htmlFor="default-radio-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                                            Finished
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input 
                                        id="default-radio-4" 
                                        type="radio" 
                                        value="pending" 
                                        name="Pending" 
                                        checked={filter === 'pending'}
                                        onChange={handleFilterChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
                                        />
                                        <label htmlFor="default-radio-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                                            Pending
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}

                </div>
                <form className='flex' onSubmit={handleSubmit}>
                    <div className=''>
                    {isError && <p className="h-0 text-red-600 text-xs flex justify-center">Title is required.</p>}
                    <input type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`mx-2 mt-[16px] mr-0 border-2 ${isError ? 'border-red-600' : 'border-gray-300'} rounded-lg py-2 px-4`}
                        placeholder="Add your task here..."
                    />
                    </div>
                    <button type='submit' className="mt-[16px] border-2 border-green-500 bg-green-500 rounded-full py-2 px-4 transition duration-200 ease-in-out text-base hover:bg-green-600 flex items-center justify-center font-semibold text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mr-2">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
                        </svg>
                        Create
                    </button>
                </form>
                <Modal show={isModalOpen} onClose={closeModal} task={undefined} deleteTask={undefined} />
            </div>
        </div>
    )
}

export default Action