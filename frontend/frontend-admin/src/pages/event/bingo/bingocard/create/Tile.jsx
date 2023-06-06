import {Item} from "./Item";
import {useState} from "react";

export function Tile({initialTiles}) {

    var el =     <ul id="items">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul>;
    var sortable = new Sortable(el, {
        group: "name",  // or { name: "...", pull: [true, false, 'clone', array], put: [true, false, array] }
        sort: true,
        pull: [true, false, 'clone']});

    const [tiles, setTiles ] = useState([[]]);
    function addNewTileToBingoCard(){
        var newTile = Array.from(tiles)
        newTile.push({tileNr:newTile.length,tile: [{
                id: tiles.length+1,
                imageSrc: "data:image/png;base64,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",
                imageAlt: "",
                date: "21-10-2022 09:08",
                clearedBy: "Cleared by uw1",
                checked: false
            }]})
        setTiles(newTile);
    }

    function removeTileFromBingoCard(tile){
        console.log(tile)
        var oldTile = Array.from(tiles)
        var removedItems =oldTile.splice(tile,1);
        var newTile =oldTile.filter((tile)=>!removedItems.includes(tile))
        setTiles(newTile);
    }

    return <div>
        <h2 >BingoCard</h2>
        <button
            type={"button"}
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => addNewTileToBingoCard()}>
            Add new tile
        </button>
        <div className="flex flex-row flex-wrap">
        {tiles && tiles.map((tile, index) => (
                    <div
                        className={"outline outline-offset-2 outline-4 outline-yellow-500 rounded-lg  my-2 mx-2 "}>
                        <Item tile={tile}/>
                        <button
                            type={"button"}
                            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-1 px-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={(e) => removeTileFromBingoCard(index)}>
                            X
                        </button>
                    </div>


        ))}
        </div>
            <sortable/>
    </div>;
}