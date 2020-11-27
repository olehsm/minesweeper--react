import React from "react"
import Board from "./components/Board"
import {TileModel} from "./models/Tile"

const App = () => {
	const boardWidth = 10;
	let tileModel = new TileModel(boardWidth, 25)

	return <>
		<Board tiles={tileModel.get()}/>
	</>
}

export default App;