enum TileState {
    bomb,
    valid
}

export class TileModel {
    model: TileType[]
    
    constructor(tileAmount: number, bombsAmount: number) {
        let tiles = []
 
        for(let i=0; i < tileAmount; i++) {
            if(i < bombsAmount)
            {
                let newTile = new TileType(TileState.bomb, i.toString(), i.toString());
                tiles.push(newTile);
            }
            else {
                let newTile = new TileType(TileState.valid, i.toString(), i.toString());
                tiles.push(newTile);
            }

        }

        let shuffeledArray = tiles.sort(() => Math.random() -0.5)
        this.model = shuffeledArray
    }

    get() {
        return this.model
    }

}


export class TileType {
    tileId: string
    message: string
    state: TileState
    
    constructor( state: TileState, id: string, content: string) {
        this.tileId = id
        this.message = content
        this.state = state
    }
}

