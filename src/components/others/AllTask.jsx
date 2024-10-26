import React, { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"
function AllTask(){
   const authdata= useContext(AuthContext)
   console.log(authdata);
   
   
    return(
 <div className="bg-[#1c1c1c] p-5  mt-5 rounded h-50  ">
    <div className="bg-green-400 rounded py-2 px-4 mb-2 flex justify-between ">
    <h2 className="bg-red-600 w-1/5"> Employee Name</h2>
    <h3 className="bg-red-600 w-1/5">New Tasl </h3>
    <h5 className="bg-red-600 w-1/5">Active Task</h5>
     <h5 className="bg-red-600 w-1/5">Completed TAsk</h5>
     <h5 className="bg-red-600 w-1/5">Failed TAsk</h5>
     </div>
   <div className="h-[80%] overflow-auto">
   {authdata.employees.map(function(elem,idx){
return <div key={idx} className=" border-2 border-emerald-500 rounded py-2 px-4 mb-2 flex justify-between ">
    <h2 className="text-green-600 w-1/5"> {elem.first_name}</h2>
    <h3 className="text-yellow-600 w-1/5">{elem.task_count.new_task} </h3>
    <h5 className="text-red-600 w-1/5">{elem.task_count.active}</h5>
     <h5 className="text-white w-1/5">{elem.task_count.completed}</h5>
     <h5 className="text-white w-1/5">{elem.task_count.failed}</h5>
     </div>

     
})}
    
</div>
</div>
    

    )
}
export default AllTask