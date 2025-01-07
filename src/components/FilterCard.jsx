// import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const fitlerData = [
  {
    fitlerType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    fitlerType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    fitlerType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
  },
];

const FilterCard = () => {
  const [selectedValue,setSelectedValue] = useState('');
  const dispatch = useDispatch()
  const changeHandler = (value)=>{
        setSelectedValue(value);
  }
  useEffect(()=>{
    //  console.log(selectedValue);
    dispatch(setSearchedQuery(selectedValue));
  },[selectedValue]);
  // return (
  //   <div className="w-full bg-white p-3 rounded-md">
  //     <h1 className="font-bold text-lg">Filter Jobs</h1>
  //     <hr className="mt-3" />
  //     <RadioGroup value={selectedValue} onValueChange= {changeHandler}>
  //       {fitlerData.map((filterGroup, groupIndex) => (
  //         <div key={groupIndex}>
  //           <h1 className="font-bold text-lg">{filterGroup.fitlerType}</h1>
            
  //           {filterGroup.array.map((item, itemIndex) => (
  //             <div key={itemIndex} className="flex items-center space-x-2 my-2">
  //               <RadioGroupItem value={item} />
  //               <Label>{item}</Label>
  //             </div>
  //           ))}
  //         </div>
  //       ))}
  //     </RadioGroup>
  //   </div>
  // );
  return (
    <div className="w-full bg-white p-3 rounded-md">
        <h1 className="font-bold text-lg">Filter Jobs</h1>
        <hr className="mt-3" />
        <RadioGroup value={selectedValue} onValueChange={changeHandler}>
            {fitlerData.map((data, index) => (
                <div key={`filter-${index}`}>
                    <h1 className="font-bold text-lg">{data.fitlerType}</h1>
                    {data.array.map((item, idx) => {
                        const itemId = `id${index}-${idx}`;
                        return (
                            <div key={`item-${index}-${idx}`} className="flex items-center space-x-2 my-2">
                                <RadioGroupItem value={item} id={itemId} />
                                <Label htmlFor={itemId}>{item}</Label>
                            </div>
                        );
                    })}
                </div>
            ))}
        </RadioGroup>
    </div>
);

};

export default FilterCard;
