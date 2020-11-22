import React from 'react';
import "./Tile.css"


type TileProps = {
    content: string
    state: number
}

const Tile = ({content, state} : TileProps) => {
    return <>
        <a href="#">
            <div className={state===0 ? "Tile bomb": "Tile"}>
                { content}
            </div>
        </a>
    </>
}

export default Tile