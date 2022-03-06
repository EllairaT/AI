import React from "react"
import { createBoard } from "./minimax/Game"

export default function App() {
	return (
		<>
			<h1>
				<center>lmao you gonna get your ass beat</center>
			</h1>
			{createBoard(3)}
		</>
	)
}
