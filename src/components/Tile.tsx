import React, { useState } from 'react';
import "./Tile.css"
import { TileState } from '../models/Tile'


type TileProps = {
    content: string
    state: number
    tileId: string
    clicked: boolean
    //setClicked: (tileId:string) => void
}

const Tile = ({tileId, content, state, clicked} : TileProps) => {

    const [tileContent, setTileContent] = useState("")
    const [tileChecked, setTileChecked] = useState(clicked)
    const [isGameOver, setGameOver] = useState(false)
    
    const handleClick = () => {
        //console.log("click", tileId)

        if(state === TileState.bomb) {
            //console.log("Game over")
            setGameOver(true)
        } else {
            let total = parseInt(content, 10)
            if(total !==0) {
                setTileContent(content)
                if(!tileChecked) setTileChecked(true)
            }  
            if(!tileChecked) setTileChecked(true)
        }
    }


    return <>
        <div className={`Tile ${!tileChecked ? "" : "checked"} ${!isGameOver ? "" : "bomb"}`}
            onClick={handleClick}>
            <span>{tileContent}</span>
        </div>
    </>
}

export default Tile