import React, { useContext, useState } from 'react';
import "./Tile.css"
import { TileState } from '../models/Tile'
import {GameContext} from '../App'



type TileProps = {
    content: string
    state: number
    tileId: string
}

const Tile = ({tileId, content, state} : TileProps) => {

    const [tileContent, setTileContent] = useState("")
    const [isGameOver, setGameOver] = useState(false)
    const gameContext  = useContext(GameContext);
    
    const handleClick = () => {

        if(state === TileState.bomb) {
            setGameOver(true)
        } else {
            let total = parseInt(content)
            if(total > 0) {
                setTileContent(content)
                gameContext.setClicked(tileId)
            } else {
                setTileContent(" ")
                gameContext.setClicked(tileId)
            }  
        }
    }


    return <>
        <div className={`Tile ${!gameContext.isClicked(tileId) ? "" : "checked"} ${!isGameOver ? "" : "bomb"}`}
            onClick={handleClick}>
            <span>{tileContent}</span>
        </div>
    </>
}

export default Tile