import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import {  Typography,} from "@material-tailwind/react";
import { FaRegBell } from "react-icons/fa";
import { LuArrowDownSquare } from "react-icons/lu";
import Sidebar from "./Sidebar";
import { DashboardHeader } from '../components/DashboardHeader'
 
 
 function Paper_Trading() {
  
    const [rowData, setRowData] = useState([
      { API_ID:"No records found"}
         
      ]);
      
      // Column Definitions: Defines & controls grid columns.
      const [colDefs, setColDefs] = useState([
        { field: "API_ID" },
        {field:"EXCHANGE"},
         { field: "SYMBOL" },
        { field: "TRANSITION" },
        { field: "QUANTITY" },
        { field: "PRICE" },
       {field:"TOTAL_AMOUNT"},
       {field:"TOTAL_PandL"},
       {field:"TOTAL_PERCENTAGE"},
       { field: "CREATED_AT" },
        
      ]);


       
      const [rowData1, setRowData1] = useState([
        { API_ID: " Toyota", EXCHANGE: "APB", SYMBOL: 64950, TRANSITION:"11" ,  QUANTITY:"good",PRICE:"250000",CREATED_AT:"CREATED AT" },
        
         
      ]);
      
      // Column Definitions: Defines & controls grid columns.
      const [colDefs1, setColDefs1] = useState([
        { field: "API_ID" },
        {field:"EXCHANGE"},
         { field: "SYMBOL" },
        { field: "TRANSITION" },
        { field: "QUANTITY" },
        { field: "PRICE" },
        { field: "CREATED_AT" },
       
        
      ]);










      const [rowData2, setRowData2] = useState([
        
        { API_ID: " Toyota", EXCHANGE: "APB", SYMBOL: 64950, TRANSITION:"11" ,  QUANTITY:"good",PRICE:"250000",CREATED_AT:"CREATED AT" },
      ]);
      
      // Column Definitions: Defines & controls grid columns.
      const [colDefs2, setColDefs2] = useState([
        { field: "API_ID" },
        {field:"EXCHANGE"},
         { field: "SYMBOL" },
        { field: "TRANSITION" },
        { field: "QUANTITY" },
        { field: "PRICE" },
        { field: "CREATED_AT" },
       
        
      ]);








   return (
    <>
 <div className='flex bg-[#181822] pr-80 '>

  
  
      <div className="w-[#10px]  md:h-[100vh]  border border-r border-[#3d3d3d] px-0 md:px-2 pt-3 h-full ">
        <Sidebar />
      </div>
      <div >
        <DashboardHeader pageTitle={"Paper Treading"} />
      


    

 


    <div className='pl-5 pr-5  bg-[#181822]  '>
    
    


    <div className=" absolute relative    w-[1000px] h-[100px]   grid grid-rows grid-flow-col   text-black capitalize        flex bg-[#ffff] mt-2 mb-2   lg:items-center   rounded  pr-70 pl-50      ">
        <div className='pl-10 pr-100' >
            <svg 
            width="14"
            height="20"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
            fill="#90A4AE"
          />              
          </svg>
         
          </div>
        <div  >
            <p>0</p>
            <p>Profit & Loss </p>
        </div>
          
          
      <div >
            <svg 
            width="14"
            height="20"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
             
             <path
            d=" M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            fill="#90A4AE"
          />     
          </svg>
         
          </div>
      <div  >
        <p>0</p>
        <p>Profit & Loss </p>
      </div>

 
 
      <div >
            <svg 
            width="14"
            height="20"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
            d=" M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            fill="#90A4AE"
          />              
          </svg>
         
          </div>
      <div  >
        <p>0</p>
        <p>Profit & Loss </p>
      </div>

 
 
      <div >
            <svg 
            width="14"
            height="20"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
            d=" M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            fill="#90A4AE"
          />              
          </svg>
         
          </div>
      <div  >
        <p>0</p>
        <p>Profit & Loss </p>
      </div>

      </div>


 
<div className="col-span-1 bg-[#181822]  pt-5  ">
      <center><p className="text-xl text-slate-500 w-full pt-5 bg-[#ffff]  ">Open Positions</p></center>
      </div>

<div className=" bg-[#fff]  pl-80 p-9 pl-10 p-10  ">
  
  <div className="grid grid-cols-4 gap-4 ">
     

    <div className="col-span-3 flex justify-end  pl-40 space-x-10 ">
      <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
        DELETE
      </button>

      <div className="flex items-center space-x-10">
        <span>
          <select className="text-gray-800 bg-gray-200 p-2">
            <option>XML</option>
            <option>XLSX All / Selected</option>
            <option>XLSX All / Selected</option>
          </select>
        </span>

        <span >
          <select className="text-gray-800 bg-gray-200 p-2 ">
            <option>APIID</option>
            <option>API ID</option>
            <option>EXCHANGE</option>
            <option>SYMBOL</option>
            <option>TRANSACTION</option>
            <option>QUALITY</option>
            <option>PRICE</option>
            <option>CREATED AT</option>
          </select>
        </span>
        
        <div className="relative   pr-30 pl-30  space-x-20 ">

          
          <input
            className="w-64 border border-gray-800 p-2  bg-red text-white placeholder-gray-300 "
            type="search"
            placeholder="Search..."


            
          />

          
        </div>
      </div>
    </div>
  </div>
</div>

    
    <div >
        
    {/* The AG Grid component */}
    <AgGridReact rowData={rowData} columnDefs={colDefs} />
  </div>

  <div className="ag-theme-quartz  " style={{ height: 200 }}>
  {/* The AG Grid component */}
  <AgGridReact rowData={rowData} columnDefs={colDefs} />
</div>

<div className='flex  justify-between bg-[#ffff]'>
           <div className='flex gap-4'>
                  <select className='border-2 rounded '>
                         <option>10</option>
                         <option>500</option>
                         <option>100</option>
                         <option>All</option>
                  </select>
                  <p>Records per page</p>

            </div>

             <p>Showing to of 0 Results</p>
  </div>













  <div className="col-span-1 bg-[#181822]   pt-5 ">
      <center><h1 className="text-xl  text-slate-500  w-full pt-5 bg-[#ffff]  ">Close Trade</h1></center>
      </div>

<div className=" bg-[#fff]  pl-80 p-9 pl-10 p-10  ">
  
  <div className="grid grid-cols-4 gap-4 ">
     

    <div className="col-span-3 flex justify-end  pl-40 space-x-10 ">
      <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
        DELETE
      </button>

      <div className="flex items-center space-x-10">
        <span>
          <select className="text-gray-800 bg-gray-200 p-2">
            <option>XML</option>
            <option>XLSX All / Selected</option>
            <option>XLSX All / Selected</option>
          </select>
        </span>

      
        
        <div className="relative   pr-30 pl-30  space-x-20">
          <input
            className="w-64 border border-gray-800 p-2  bg-red text-white placeholder-gray-300 "
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  </div>
</div>

    
    <div >
        
    {/* The AG Grid component */}
    <AgGridReact rowData={rowData} columnDefs={colDefs} />
  </div>

  <div className="ag-theme-quartz " style={{ height: 200 }}>
  {/* The AG Grid component */}
  <AgGridReact rowData={rowData} columnDefs={colDefs} />
</div>

<div className='flex  justify-between bg-[#ffff]'>
           <div className='flex gap-4'>
                  <select className='border-2 rounded '>
                         <option>10</option>
                         <option>500</option>
                         <option>100</option>
                         <option>All</option>
                  </select>
                  <p>Records per page</p>

            </div>

             <p>Showing to of 0 Results</p>
  </div>





  <div className="col-span-1 bg-[#181822] pt-5   ">
      <center><p className="text-xl  text-slate-500 w-full pt-5 bg-[#ffff]  ">Order Table</p></center>
      </div>

<div className=" bg-[#fff]  pl-80 p-9 pl-10 p-10  ">
  
  <div className="grid grid-cols-4 gap-4  ">
     

    <div className="col-span-3 flex justify-end  pl-40 space-x-10 ">
      <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
        DELETE
      </button>

      <div className="flex items-center space-x-10">
        <span>
          <select className="text-gray-800 bg-gray-200 p-2">
            <option>XML</option>
            <option>XLSX All / Selected</option>
            <option>XLSX All / Selected</option>
          </select>
        </span>

       
        
        <div className="relative   pr-30 pl-30  space-x-20">
          <input
            className="w-64 border border-gray-800 p-2  bg-red text-white placeholder-gray-300 "
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  </div>
</div>

    
    <div  className='bg-gray-200'>
        
    {/* The AG Grid component */}
    <AgGridReact rowData={rowData} columnDefs={colDefs} />
  </div>

  <div className="ag-theme-quartz" style={{ height: 200 }}>
  {/* The AG Grid component */}
  <AgGridReact rowData={rowData} columnDefs={colDefs} />
</div>

<div className='flex  justify-between bg-[#ffff]'>
           <div className='flex gap-4'>
                  <select className='border-2 rounded '>
                         <option>10</option>
                         <option>500</option>
                         <option>100</option>
                         <option>All</option>
                  </select>
                  <p>Records per page</p>

            </div>

             <p>Showing to of 0 Results</p>
  </div>







   
</div>
</div>


</div>




     

  
  
     

    
 



   





    
 
    </>
    
   )
 }
 
 export default Paper_Trading