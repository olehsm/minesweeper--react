import React from 'react'
import Tile from "./Tile"
import {TileType} from "../models/Tile"
import "./Board.css"

type BoardProps = {
    tiles: TileType[]
}

const Board = ({tiles} : BoardProps) => {


    return <>
        <div className="responsive">
            <div className="container">
                <div className="Board">
                    {
                        tiles.map(tile => <Tile key={tile.tileId} tileId={tile.tileId} content={tile.message} state={tile.state}/>)
                    }
                </div>
            </div>
            <aside>
		        <span className="disclaimer">Photo by <a href="https://unsplash.com/@nervum?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jack B</a> on <a href="https://unsplash.com/s/photos/metal-detector?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
            </aside>
        </div>
    </>
}

export default Board