import {BingoCardService} from "../../../../../service/bingocardService";
import {useNavigate} from "react-router-dom";
import {BingoCard} from "./BingoCard";

function Main() {
    const bingoCardService = new BingoCardService();
    const navigate = useNavigate();
    return (<>

            <form className="space-y-8 divide-y divide-gray-200">
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div className="space-y-6 sm:space-y-5">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Bingo card</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Create a new bingo card.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={"relative "}>
                <BingoCard initialBingoCard={{name: "", tiles: []}}/>
                </div>
                <div className="pt-5">
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => {
                                navigate("/event/bingo/bingocard")
                            }}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => {
                                bingoCardService.CreateCard("/", {name: cardName})
                                navigate("/event/bingo/bingocard")
                            }
                            }>
                            Create
                        </button>
                    </div>
                </div>
                <div className={" sticky bottom-24 z-50 flex flex-col"}>
                    <label>Available bingoitems</label>
                    <input defaultValue={"search item"} type={"text"}></input>
                    <p> items</p>
                </div>
            </form>

        </>
    )
}

export default Main;
