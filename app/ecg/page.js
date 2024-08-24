'use client'
import React from 'react'
import { useState } from "react";
import { Checkbox, Table } from "flowbite-react";

const page = () => {
const [name, setName] = useState("")
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
     
       <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
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
    <h2 class="flex gap-3 items-center m-auto text-lg font-bold md:flex-col md:gap-2 text-black">
        <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round"
            stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>Hey
    </h2>
    <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
        <li class="w-full bg-green-200 p-3 rounded-md text-black ">
            Limited operating hours
        </li>
        <li class="w-full bg-green-200 p-3 rounded-md text-black">Limited warranty coverage</li>
        <li class="w-full bg-green-200 p-3 rounded-md text-black">Limited geographic coverage
        </li>
    </ul>
</div>

    </>
    }
    </>
  }
    </>
    
    );
}

export default page