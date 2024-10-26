import React from "react"
import AcceptedtTask from "../TaskList/AcceptTask"
import NewTask from "../TaskList/NewTask"
import CompletedTask from "../TaskList/CompleteTask"
import FailedTask from "../TaskList/FailedTask"
function Tasklist({data}){
    console.log(data);
    
    return (
<div id='tasklist' className="h-[55%] flex overflow-x-auto w-full gap-7  flex-nowrap  mt-10 items-center justify-start">
{data.tasks.map((elem)=>{
    if(elem.active){
        return <AcceptedtTask data={elem}></AcceptedtTask>
    }
    if(elem.new_task){
        return <NewTask data={elem}></NewTask>
    }

    if(elem.completed){
        return <CompletedTask data={elem}></CompletedTask>
    }
    
    if(elem.failed){
        return <FailedTask data={elem}></FailedTask>
    }
})}

</div>
    )
}
export default Tasklist 