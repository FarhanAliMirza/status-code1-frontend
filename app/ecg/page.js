'use client'
import React from 'react'
import { useState } from "react";
import { Checkbox, Table } from "flowbite-react";

const page = () => {
const [name, setName] = useState("Azim")
const [age, setAge] = useState("")
const [validateName , setValidateName] = useState(true)
const [validateAge , setValidateAge] = useState(true)
const [loading, setLoading] = useState(false)
const [data , setData] = useState(1)



const validate = () =>{
    if(name=="")
    {setValidateName(false)}
    else
    {setValidateName(true)}
  
    if (age>0 && age< 100)
      {setValidateAge(true)}
    else
      {setValidateAge(false)}
  
    if (name!="" && age>0 && age< 100)
      {
        setLoading(true)
      }    
  }

  return  (
    <>
    {loading?
    <div class="loading h-screen flex items-center justify-center">
  
    <svg width="64px" height="48px">
        <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
      <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
    </svg>
   </div>
    :
    <>
    {!data ?
    <>
     <div class="bg-blue-200 min-h-screen flex items-center">
     <div class="w-full">
     
       <div class="bg-blue-chill-700 p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
         <div>
           <div class="mb-5">
             <label class="block mb-2 font-bold text-gray-600">Username</label>
             {!validateName ?<input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Put in your username"  class="border border-red-300 shadow p-3 w-full rounded text-gray-900"/>:<input type="text" placeholder="Put in your username"  value={name} onChange={(e)=>setName(e.target.value)} class="border border-gray-300 shadow p-3 w-full rounded text-gray-900"/>}
             {!validateName&&<p class="text-sm text-red-400 mt-2">Full Name is required</p>}
           </div>
  
           <div class="mb-5">
             <label class="block mb-2 font-bold text-gray-600">Age</label>
             {!validateAge?<input type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Put in your age." class="border  border-red-300 shadow p-3 w-full rounded text-gray-900" min="1" max="100"/>:<input type="number"  value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Put in your age." class="border  border-gray-300 shadow p-3 w-full rounded text-gray-900" min="1" max="100"/>}
             {!validateAge&&<p class="text-sm text-red-400 mt-2">Invalid age</p>}
           </div>
  
           <button onClick={()=>validate()} class="py-3 px-8 bg-gray-900 text-gray-100 font-bold rounded">Submit</button>
         </div>
       </div>
       <h1 class="text-center text-xs text-gray-600 font-bold  mt-10">*Fill up the following Basic details needed to proceed</h1>
     </div>
    </div> 

    <div class="ocean">
    <div class="wave"></div>
    <div class="wave"></div>
    </div>
    </>
    :
    <>
<div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1 p-4 mt-16">
    <h2 class="flex-row gap-3 text-4xl	 items-center m-auto text-lg font-bold md:flex-col md:gap-2 text-black">
      Hey {name} 👋
    </h2>
    <div class="flex flex-col gap-3.5 w-full  rounded-md  bg-orange-100	sm:max-w-4xl m-auto p-10">
    <ul class="flex flex-col gap-3.5 w-full sm:max-w-3xl m-auto">
        <li class="w-full bg-green-200 p-3 text-3xl	 rounded-md text-black font-bold ">
            Cholestorol 
            <span className='float-end bg-red-200 py-2 px-10 rounded mx-1'>False</span>
        </li>
        <li class="w-full bg-green-200 p-3 text-3xl	 rounded-md text-black font-bold">Cardiomegally
        <span className='float-end bg-red-200 py-2 px-10 rounded mx-1'>False</span>
        </li>
        <li class="w-full bg-green-200 p-3  text-3xl	 rounded-md text-black font-bold">Abnormalities
          <span className='float-end bg-red-200 py-2 px-10 rounded mx-1'>False</span>
        </li>
        <li class="w-full bg-green-200 p-3 text-3xl	 rounded-md text-black font-bold">Previous Heart-Attacks
        <span className='float-end bg-red-200 py-2 px-10 rounded mx-1'>False</span>
        </li>
    </ul>
    </div>
</div>

    </>
    }
    </>
  }
    </>
    
    );
}

export default page