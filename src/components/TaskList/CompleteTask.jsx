import React from "react"
function CompletedTask({data}){
    return(
<div className="flex-shrink-0 h-full w-[300px] bg-yellow-400  p-6 rounded-xl ">
        <div className="flex justify-between items-center">
            <h3 className="bg-green-800 py-3 px-5 bg-zinc-400 text-black text-bold rounded-full text-sm">{data.category}</h3>
            <h4 className="text-black">{data.task_date}</h4>
        </div>
        <h2 className="font-semild text-2xl mt-5">{data.task_title}</h2>
        <p className="text-sm mt-2"> {data.task_description}</p>
        <div className="mt-4">
            <button className="bg-yellow-600 text-white px-1 py-2 rounded-full mt-4">Completed Task</button>
        </div>
        
    </div>
    )
}
export default CompletedTask