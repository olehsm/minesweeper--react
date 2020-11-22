import React from "react"
import Board from "./components/Board"
import {TileModel} from "./models/Tile"

const App = () => {
	let tileModel = new TileModel(100, 25)

	return <>
		<Board tiles={tileModel.get()}/>
	</>
}

export default App;