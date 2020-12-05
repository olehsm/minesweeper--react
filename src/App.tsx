import React from "react"
import Board from "./components/Board"
import {TileModel} from "./models/Tile"

const boardWidth = 10
const tileModel = new TileModel(boardWidth, 25)

export const GameContext = React.createContext(tileModel);

const App = () => {
	

	return <>
		<GameContext.Provider value={tileModel}>
			<Board tiles={tileModel.get()}/>
		</GameContext.Provider>
	</>
}

export default App;