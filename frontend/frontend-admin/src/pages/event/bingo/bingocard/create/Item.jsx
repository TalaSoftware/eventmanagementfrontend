import {useState} from "react";

export function Item({tile}){
    const [items, setItems] = useState([])

    return (
        <> {items&&items.map((item) => (
            <div
                key={item.id}
                className=" mx-2 my-2 relative flex items-center space-x-3 rounded-lg border border-gray-300 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
                <div className={"bg-lime-400"}>
                    <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={item.imageSrc} alt=""/>
                    </div>
                </div>
            </div>
        ))}

           </>
    )
}