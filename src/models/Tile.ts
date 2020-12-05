export enum TileState {
    bomb,
    valid
}

export class TileModel {
    model: TileType[]
    
    constructor(boardWith: number, bombsAmount: number) {
        let tiles = []
 
        for(let i=0; i < boardWith * boardWith; i++) {
            if(i < bombsAmount)
            {
                let newTile = new TileType(TileState.bomb, i.toString(), "", false)
                tiles.push(newTile);
            }
            else {
                let newTile = new TileType(TileState.valid, i.toString(), "", false)
                tiles.push(newTile);
            }

        }

        let shuffeledArray = tiles.sort(() => Math.random() -0.5)

        for(let i=0; i<shuffeledArray.length; i++) {
            let totalBombsInProximity = 0
            const isLeftEdge = (i % boardWith === 0)
            const isRightEdge = (i % boardWith === boardWith-1)
            if(shuffeledArray[i].state === TileState.valid) {
                if(i > 0 && !isLeftEdge && shuffeledArray[i-1].state === TileState.bomb) totalBombsInProximity++
                if(i > 9 && !isRightEdge && shuffeledArray[i+1 - boardWith].state === TileState.bomb) totalBombsInProximity++
                if(i > 10 && shuffeledArray[i - boardWith].state === TileState.bomb) totalBombsInProximity++
                if(i > 11 && !isLeftEdge && shuffeledArray[i-1-boardWith].state === TileState.bomb) totalBombsInProximity++
                if(i < 98 && !isRightEdge && shuffeledArray[i+1].state === TileState.bomb) totalBombsInProximity++
                if(i < 90 && !isLeftEdge && shuffeledArray[i - 1 + boardWith].state === TileState.bomb) totalBombsInProximity++
                if(i < 88 && !isRightEdge && shuffeledArray[i +1 + boardWith].state === TileState.bomb) totalBombsInProximity++
                if(i < 89 && shuffeledArray[i + boardWith].state === TileState.bomb) totalBombsInProximity++
                totalBombsInProximity === 0 ? shuffeledArray[i].message = "" : shuffeledArray[i].message = totalBombsInProximity.toString() 
            }
        }

        this.model = shuffeledArray
    }

    get() {
        return this.model
    }

    setClicked(tileId: string) {
        const tile = this.model.find(tile => tile.tileId === tileId)
        if(tile && !tile.clicked) {
            tile.clicked = true
        }
    }

    isClicked(tileId: string) {
        const tile = this.model.find(tile => tile.tileId === tileId)
        return tile?.clicked
    }

}


export class TileType {
    tileId: string
    message: string
    state: TileState
    clicked: boolean
    
    constructor( state: TileState, id: string, content: string, clicked: boolean) {
        this.tileId = id
        this.message = content
        this.state = state
        this.clicked = clicked
    }
}