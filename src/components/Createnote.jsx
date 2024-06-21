import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Createnote() {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const navigate = useNavigate();

    async function handleClick(e) {
        e.preventDefault();
        const token = localStorage.getItem("usertoken");
        if (!token) {
            console.log("Token not given");
            navigate("/");
        }
        try {
            const response = await axios.post("http://localhost:4000/note/addnote", { title, note }, {
                headers: { authorization: `Bearer ${token}` },
            });
       
            if (response.status === 201) {
                alert("Note added");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="bg-gray-900 dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-md">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold text-white">Add Notes</h1>
                </div>
                <form className="space-y-4" action="#">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-200">Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className="w-full p-2.5 bg-gray-700 border border-gray-600 text-white rounded-lg shadow-md focus:ring-golden-500 focus:border-golden-500"
                            placeholder="Title"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-200">Note</label>
                        <textarea
                            rows={10}
                            name="note"
                            id="note"
                            value={note}
                            onChange={e => setNote(e.target.value)}
                            className="w-full p-2.5 bg-gray-700 border border-gray-600 text-white rounded-lg shadow-md focus:ring-golden-500 focus:border-golden-500"
                            placeholder="Type your note here"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={handleClick}
                        className="w-full py-2.5 text-white bg-golden-600 hover:bg-golden-700 focus:ring-4 focus:outline-none focus:ring-golden-300 font-medium rounded-lg shadow-md"
                    >
                        Add Note
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Createnote;
