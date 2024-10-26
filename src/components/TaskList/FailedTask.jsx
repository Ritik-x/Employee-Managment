import React from "react"
function FailedTask({data}){
    return(
        <div className="flex-shrink-0 h-full w-[300px] bg-red-400  p-6 rounded-xl ">
        <div className="flex justify-between items-center">
            <h3 className="bg-red-800 py-3 px-5 rounded-full text-sm">{data.category}</h3>
            <h4 className="text-black">{data.task_date}</h4>
        </div>
        <h2 className="font-semild text-2xl mt-5">{data.task_title}</h2>
        <p className="text-sm mt-2"> {data.task_description}</p>
        <div className="mt-4">
        <button className="bg-red-600 py-1 px-2 mt-4  rounded-full text-sm">Failed Task</button>
        </div>
    </div>
    )
}

export default FailedTask