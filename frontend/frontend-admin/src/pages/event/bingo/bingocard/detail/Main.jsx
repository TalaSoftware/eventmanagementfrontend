import {Link, useSearchParams} from "react-router-dom";
import {BingoCardService} from "@/service/bingocardService";
import {useEffect, useState} from "react";


function Main() {
    const bingocardService = new BingoCardService();
    const [bingocard, setBingocard] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const [tiles, setTiles] = useState();
    const bingocardId =searchParams.get("bingocardId")
    useEffect(()=>{
        const intervalId = setInterval(()=>
                bingocardService.GetById(bingocardId).then((bingocard)=>{
                    if(bingocard) {
                        setBingocard(bingocard)
                        const newTiles = bingocard.tiles.sort(sortByTilePosition);
                        setTiles(newTiles);
                    }
                })
            ,2000);
        return ()=>{
            clearInterval(intervalId)
        };
    },[])

    function sortByTilePosition(tileA,tileB){
        console.log("a", tileA,"b",tileB.tileposition)
        if (tileA.tileposition <tileB.tileposition) {

            return -1;
        }
        if (tileA.tileposition >tileB.tileposition) {
            return 1;
        }
        return 0;
    }

    return (
        <>
            <div className="intro-y flex items-center mt-8">
                <h2 className="text-lg font-medium mx-2">BingoCard</h2>
            </div>
            <p className="intro-y  mx-2 text-sm font-medium">The bingocard here consists of tiles. Each tile is marked by the edge and contains one or more bingoItems</p>
            {/* BEGIN: Page Layout */}
            <div className="intro-y box p-5 mt-5">
                <div className="flex flex-row flex-wrap">
                    <h2 className="sr-only">BingoCard</h2>
                    {bingocard&& tiles.map((tile) => (
                        <div>
                            <p className="text-sm font-medium">Tile {tile.tileNr}</p>
                            <div className="flex flex-row flex-wrap">
                                <div className={"outline outline-offset-2 outline-4 outline-yellow-500 rounded-lg  my-2 mx-2 "}>
                                    {tile.tileitems.map((t) => (

                                        <div>
                                        {!t.acquiredby&&
                                        <div
                                        key={t.id}
                                        className=" mx-2 my-2 relative flex items-center space-x-3 rounded-lg border border-gray-300 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                                        >
                                            <div>
                                                <div className="flex-shrink-0">
                                                    <img className="h-10 w-10 rounded-full" src={t.imageSrc} alt="" />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <a href="#" className="focus:outline-none">
                                                        <p className="text-sm font-medium">{t.item.name}</p>
                                                        {/*<p className="truncate text-sm ">not yet acquired</p>*/}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>}
                                            {t.acquiredby!=""&& t.acquiredby&&
                                            <div
                                            key={t.id}
                                            className="bg-lime-400 mx-2 my-2 relative flex items-center space-x-3 rounded-lg border border-gray-300 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                                            >
                                                <div>
                                                    <div className="flex-shrink-0">
                                                        <img className="h-10 w-10 rounded-full" src={t.imageSrc} alt="" />
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <a href="#" className="focus:outline-none">

                                                            <p className="text-sm font-medium">{t.item.name}</p>
                                                            <p className="truncate text-sm ">{t.acquiredby}</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            }
                                            </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pt-5">
                    <div className="flex justify-end">
                        <Link
                            to={"/event/bingo/bingocard"}
                            type="button"
                            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"

                        >
                            Cancel
                        </Link>
                        <Link
                            to={"/event/bingo/bingocard"}
                            type="submit"
                            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={()=> {
                                bingoCardService.CreateCard("/",{name:cardName})
                            }
                            }>
                            Create
                        </Link>
                    </div>
                </div>
            </div>
            {/* END: Page Layout */}

        </>
    );
}

export default Main;
