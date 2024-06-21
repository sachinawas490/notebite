import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mycontext } from '../context/Myprovider';
import axios from 'axios';

function Update() {
    const { index } = useParams();
    const navigate = useNavigate();
    const { notes, setNotes } = useContext(mycontext);
    const { title, content } = notes[index];
    const [newContent, setNewContent] = useState(content);

    async function handleUpdate() {
        const token = localStorage.getItem("usertoken");
        if (!token) {
            console.log("Token not given");
            navigate("/");
        }
        try {
            const response = await axios.put('http://localhost:4000/note/notes', {
                title,
                newContent,
                noteid: notes[index]._id
            }, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            });
            console.log(response);
            if (response.status === 201) {
                const updatedNotes = notes.map((note, i) => (i === index ? { ...note, content: newContent } : note));
                setNotes(updatedNotes);
                alert("Note updated");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='bg-gray-900 dark:bg-gray-900 text-white min-h-screen flex items-center justify-center'>
            <div className='w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-md'>
                <h1 className='text-2xl font-bold'>Update Note</h1>
                <div>
                    <div>{title}</div>
                    <textarea
                        rows={10}
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        className='w-full p-2.5 bg-gray-700 border border-gray-600 text-white rounded-lg shadow-md focus:ring-golden-500 focus:border-golden-500'
                    ></textarea>
                </div>
                <button
                    onClick={handleUpdate}
                    className='w-full py-2.5 text-white bg-golden-600 hover:bg-golden-700 focus:ring-4 focus:outline-none focus:ring-golden-300 font-medium rounded-lg shadow-md'
                >
                    Update
                </button>
            </div>
        </div>
    );
}

export default Update;
