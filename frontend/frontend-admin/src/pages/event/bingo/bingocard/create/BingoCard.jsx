import {useState} from "react";
import {Tile} from "./Tile";
import {string} from "prop-types";

export function BingoCard(initialBingoCard) {
    const [bingoCard, setBingoCard] = useState(initialBingoCard);

    return <>
        <div className=" z-0 space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div className="space-y-6 sm:space-y-5">
                <div
                    className=" sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="street-address"
                           className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Card name
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                        {/*<input*/}
                        {/*    type="text"*/}
                        {/*    name="cardname"*/}
                        {/*    id="cardname"*/}
                        {/*    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"*/}
                        {/*    onChange={(event) => setName(event.target.value)}*/}
                        {/*/>*/}
                    </div>
                </div>
            </div>
        </div>

        <p className="  mx-2 text-sm font-medium">The bingocard here consists of tiles. Each tile is marked
            by the edge and contains one or more bingoItems</p>
        <div className=" box p-5 mt-5">
            <div className="flex flex-row flex-wrap">

                <Tile tiles={bingoCard.tiles}/>
            </div>
            <div className="pt-5">
                <div className="flex justify-end">


                </div>
            </div>
        </div>
    </>;
}