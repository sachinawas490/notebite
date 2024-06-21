import React, { useContext } from "react";
import { mycontext } from "../context/Myprovider";
import { useNavigate } from "react-router-dom";
import GeminiHelper from "./GeminiHelper";
function Showpage() {
    const navigate = useNavigate();
    const { notes, loading, deletenote } = useContext(mycontext);

    function handleClick(index) {
        navigate(`update/${index}`);
    }

    return (
        <div className=" min-h-screen bg-gray-900 text-white p-4">
            <h1 className="text-3xl font-bold mb-4">My Notes</h1>
            {loading && <div className="text-golden-500">Loading...</div>}
            <div className="overflow-x-auto">
                <table className="table-auto w-[80vw] mx-auto">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="px-4 py-2">Index</th>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notes.map((note, index) => (
                            <tr key={index} className="bg-gray-700">
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{note.title}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        className="text-golden-500 hover:text-golden-600 mr-4"
                                        onClick={() => handleClick(index)}
                                    >
                                        View
                                    </button>
                                    <button
                                        className="text-red-500 hover:text-red-600"
                                        onClick={() => deletenote(index)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
			
            </div>
        </div>
    );
}

export default Showpage;
