import {linkTo} from "../../../../../layouts/side-menu";
import {Link, useNavigate} from "react-router-dom";
import {BingoCardService} from "../../../../../service/bingocardService";
import {useEffect, useState} from "react";
const event = [
    { name: 'BAN2020', cardSize: 5 },
    { name: 'BAN2021', cardSize: 5 },
    { name: 'BAN2022', cardSize: 5 },
    { name: 'BAN2023', cardSize: 5 },
    { name: 'BAN2024', cardSize: 5 },
    { name: 'BAN2025', cardSize: 5 },
    { name: 'BAN2026', cardSize: 5 },
    { name: 'BAN2027', cardSize: 5 },
    { name: 'BAN2028', cardSize: 5 },
]

function Main() {
    const bingoCardService = new BingoCardService();
    const createBingoCardhref="create";
    const navigate = useNavigate()

    const [bingoCards,setBingoCards] = useState([])
    useEffect( () => {
        const retrieveBingoCards = async () => {
            const cards = await bingoCardService.GetCards();
            return cards;
        }
         retrieveBingoCards().then((data)=>{
             setBingoCards(data)
        });
    },[])

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Bingo cards</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the bingo cards
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                        onClick={(event=>{
                            navigate(createBingoCardhref)
                        })}
                    >
                        Create new card
                    </button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                                    >
                                        Name
                                    </th>
                                    {/*<th*/}
                                    {/*    scope="col"*/}
                                    {/*    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"*/}
                                    {/*>*/}
                                    {/*    Description*/}
                                    {/*</th>*/}
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {bingoCards&&bingoCards.map((bingoCard) => (
                                    <tr key={bingoCard.name}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {bingoCard.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{bingoCard.cardSize}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <Link to={"detail/?bingoCardName="+bingoCard.name} className="text-indigo-600 hover:text-indigo-900">
                                                Edit<span className="sr-only"

                                            >, {bingoCard.name}</span>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;
