import {BingoCardService} from "../../../../../service/bingocardService";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function Main() {
    const bingoCardService = new BingoCardService();
    const navigate = useNavigate();
    const [cardName, setName] = useState();
    return (
        <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="space-y-6 sm:space-y-5">
                    <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Bingo card</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                           Create a new bingo card.
                        </p>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Card name
                        </label>
                        <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <input
                                type="text"
                                name="cardname"
                                id="cardname"
                                className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                onChange={(event)=> setName(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={()=>{
                            navigate("/event/bingo/bingocard")
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={()=> {
                            bingoCardService.CreateCard("/",{name:cardName})
                            navigate("/event/bingo/bingocard")
                        }
                        }>
                        Create
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Main;
