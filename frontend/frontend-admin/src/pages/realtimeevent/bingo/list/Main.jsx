const event = [
    { eventCode: 'BAN2020', title: 'Bosstober organized by gastje888', StartDate: '14-2-2023', EndDate: '30-3-2023' },
    { eventCode: 'BAN2021', title: 'Barrows event organized by N7N',   StartDate: '14-2-2023', EndDate: '30-3-2023' },
    { eventCode: 'BAN2022', title: 'Bosstober organized by gastje888', StartDate: '14-2-2023', EndDate: '30-3-2023' },
    { eventCode: 'BAN2023', title: 'Barrows event organized by N7N',   StartDate: '14-2-2023', EndDate: '30-3-2023' },
    { eventCode: 'BAN2024', title: 'Bosstober organized by gastje888', StartDate: '14-2-2023', EndDate: '30-3-2023' },
    { eventCode: 'BAN2025', title: 'Barrows event organized by N7N',   StartDate: '14-2-2023', EndDate: '30-3-2023' },
    { eventCode: 'BAN2026', title: 'Bosstober organized by gastje888', StartDate: '14-2-2023', EndDate: '30-3-2023' },
    { eventCode: 'BAN2027', title: 'Barrows event organized by N7N',   StartDate: '14-2-2023', EndDate: '30-3-2023' },
    { eventCode: 'BAN2028', title: 'Mole Mass organized by Lady',      StartDate: '14-2-2023', EndDate: '30-3-2023' },
]

function Main() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Users</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the users in your account including their name, title, email and role.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Add user
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
                                        Title
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Description
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Start Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        End Date
                                    </th>
                                    <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {event.map((person) => (
                                    <tr key={person.title}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {person.eventCode}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.StartDate}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.EndDate}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit<span className="sr-only">, {person.name}</span>
                                            </a>
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
