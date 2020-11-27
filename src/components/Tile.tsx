import React from 'react';
import "./Tile.css"


type TileProps = {
    content: string
    state: number
    tileId: string
}

const Tile = ({tileId, content, state} : TileProps) => {

    const handleClick = () => {
        console.log("click", tileId)
    }


    return <>
            <div className={"Tile"}
                onClick={handleClick}>
                { content}
            </div>
    </>
}

export default Tile