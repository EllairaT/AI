import React, { useState } from "react"

export function Cell(props) {
	const [clicked, setclicked] = useState(false)
	const cellStyle = {
		fontSize: "5em",
		cursor: "pointer",
		outline: "none",
		width: "auto",
		minHeight: "170px",
	}

	const drawValue = () => {
		return clicked ? "X" : ""
	}
	return (
		<button style={cellStyle} onClick={() => setclicked(true)}>
			{drawValue()}
		</button>
	)
}
