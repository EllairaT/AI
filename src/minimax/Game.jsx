import React from "react"
import Board from "./components/Board"

let winner = null
let currentPlayer // set this to human as default

const winningScores = {
	maxPlayer: 1,
	minPlayer: -1,
	draw: 0,
}

const players = [
	{
		name: "Human",
		mark: "X",
		type: winningScores.maxPlayer,
	},
	{
		name: "AI",
		mark: "O",
		type: winningScores.minPlayer,
	},
]

export function trackGame() {}

// set up the board
export function createBoard(size) {
	for (var p in players) {
		console.log(players[p])
	}
	return <Board size={size} />
}

export function startGame() {
	// start with player 1
	currentPlayer = players[0]
}

function evaluatePosition(currentPlayer) {
	// # of rows open for X + # of cols open for X + # of diags open for X
}

function isWinningMove() {} // checking the rows, cols and diags

function checkTurn() {} // checking the current turn to see if there is a winner

function getBestMove(currentPlayer) {}

function minimax(pos, depth, isMaxPlayer) {}
