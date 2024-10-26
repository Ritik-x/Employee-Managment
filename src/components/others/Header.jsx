import React, { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";
 function Header({data}){
   const logoutuser=()=>{
    localStorage.removeItem("loggedInUser");
window.location.reload();
   }
   // const [username , setUserName]=useState('')

//   if(!data){
   // setUserName('Admin')

//   }
//   else{
   // setUserName(data.first_name)

//   }
   
    return(
<div className="flex justify-between items-end">
     <h1 className="text-2xl font-semibold">Hello 
        <br/> <span className="font-mid text-4xl"> username 🤚🏼</span> </h1>
     <button  onClick={logoutuser} className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-400 hover:text-black mb-4">Log Out</button>
</div>
    )
 }
 export default Header;