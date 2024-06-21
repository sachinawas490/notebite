import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleClick(e) {
        e.preventDefault();
        if (!email || !password || !name) {
            return alert("Fill data in all fields");
        }
        try {
            const response = await axios.post("http://localhost:4000/user/registration", { name, email, password });
            if (response.status === 201) {
                alert('Registration successfully done');
            }
        } catch (error) {
            if (error.response.status === 401) {
                alert(error.response.data.message);
            }
        }
    }

    return (
        <section className="bg-gray-900 dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-md">
                <div className="flex flex-col items-center">
                    <img className="w-12 h-12 mb-4" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    <h1 className="text-2xl font-bold text-white">Notebite</h1>
                </div>
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-white text-center">Register your account</h2>
                    <form className="space-y-4" action="#">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-200">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="w-full p-2.5 bg-gray-700 border border-gray-600 text-white rounded-lg shadow-md focus:ring-golden-500 focus:border-golden-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-200">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="w-full p-2.5 bg-gray-700 border border-gray-600 text-white rounded-lg shadow-md focus:ring-golden-500 focus:border-golden-500"
                                placeholder="name@company.com"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-200">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="w-full p-2.5 bg-gray-700 border border-gray-600 text-white rounded-lg shadow-md focus:ring-golden-500 focus:border-golden-500"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={handleClick}
                            className="w-full py-2.5 text-white bg-golden-600 hover:bg-golden-700 focus:ring-4 focus:outline-none focus:ring-golden-300 font-medium rounded-lg shadow-md"
                        >
                            Sign up
                        </button>
                        <p className="text-sm text-gray-500">
                            Already have an account?{" "}
                            <Link to={'/'} className="font-medium text-golden-500 hover:underline">Sign in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Registration;
