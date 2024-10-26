import React, { useDebugValue } from "react"
function AcceptedtTask({data}){
    return(
<div className="flex-shrink-0 h-full w-[300px] bg-green-700  p-6 rounded-xl ">
        <div className="flex justify-between items-center">
            <h3 className="bg-green-500 py-3 px-5 rounded-full text-sm">{data.category}</h3>
            <h4 className="text-black">{data.task_date}</h4>
        </div>
        <h2 className="font-semild text-2xl mt-5">{data.task_title}</h2>
        <p className="text-sm mt-2"> {data.task_description}</p>
        <div className="mt-4 flex justify-between gap-4">
            <button className="bg-green-600 py-1 px-1 mt-4 text-sm">Mark As Completed</button>
            <button className="bg-red-600 py-1 px-1 mt-4 text-sm">Mark As Failed</button>
        </div>
    </div>





    )
}
export default AcceptedtTask