import React, { useState } from "react"
import { Cell } from "./Cell"
import styled from "styled-components"

export default function Board({ size, onClick }) {
	const boardStyle = {
		border: "1px solid darkblue",
		borderRadius: "10px",
		width: "500px",
		height: "500px",
		margin: "0 auto",
		display: "grid",
		gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
	}

	return (
		<div style={boardStyle}>
			{[...Array(size * size)].map((_, i) => (
				<Cell
					value={i}
					onClick={() => console.log(`you clicked position ${i}`)} // onClick depends on player?
				/>
			))}
		</div>
	)
}
