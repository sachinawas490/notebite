import React, { useState } from "react";
import run from "../gemini/Gemini"; // Adjust the import path as necessary

function Ai() {
	const [prompt, setPrompt] = useState("");
	const [result, setResult] = useState("");

	const delayPara = (index, nextWord) => {
		setTimeout(() => {
			setResult((prev) => prev + nextWord);
		}, 75 * index);
	};

	async function handleClick() {
		const response = await run(prompt + " explain in short");
		let temp = response.split("**");
		let newarr = ""; // Initialize newarr as an empty string

		for (let i = 0; i < temp.length; i++) {
			if (i === 0 || i % 2 !== 1) {
				newarr += temp[i];
			} else {
				newarr += "<b>" + temp[i] + "</b>";
			}
		}

		let t = newarr.split("*").join("</br></br>").replace("#", "");
		let newres = t.split(" ");
		setPrompt(""); // Reset prompt before starting word-by-word update
		setResult(""); // Reset result before starting word-by-word update
		for (let i = 0; i < newres.length; i++) {
			const newword = newres[i];
			delayPara(i, newword + " ");
		}
	}

	return (
		<div className="flex flex-col  ">
			<div className="flex w-full border-2 border-slate-900 rounded-xl bg-slate-600">
				<input
					type="text"
					className="w-[80%] py-2 border-2 border-slate-950 rounded-xl"
					placeholder="Enter your prompt"
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
				/>
				<button className="bg-blue-400 px-2" onClick={handleClick}>
					Send
				</button>
			</div>
			<div>
				<div
					
					className="w-[96%] max-h-[290px] min-h-[290px] overflow-y-scroll border-2 px-2 text-[12px] border-slate-900 textarea textarea-warning mt-2 bg-slate-200"
					dangerouslySetInnerHTML={{ __html: result }}
				></div>
			</div>
		</div>
	);
}

export default Ai;
