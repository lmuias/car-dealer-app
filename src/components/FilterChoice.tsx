'use client'

import Link from "next/link";
import Dropdown from "./Dropdown";
import { Car } from "@/types/CarType";
import React, { useState } from "react";

interface CarType {
  cars: Car[];
}

const FilterChoice: React.FC<CarType> = ({ cars }) => {
  const [carMakeId, setCarMakeId] = useState<string | number>('Car Make Id');
  const [carYear, setCarYear] = useState<string | number>('Car year made');

  const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']

  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <Dropdown dropdownTitle={carMakeId} Cars={cars} setCarMakeId={setCarMakeId} />
      <Dropdown dropdownTitle={carYear} years={years} setCarYear ={setCarYear} />

      <Link
        onClick={(e) => {
          if (carMakeId === 'Car Make Id' || carYear === 'Car year made') {
            e.preventDefault();
          }
        }}
        className={`${
          carMakeId === 'Car Make Id' || carYear === 'Car year made' 
            ? "inline-flex w-fit items-center px-10 py-1 text-xs font-medium ring-1 text-gray-700 bg-gray-200 border border-gray-300 ring-inset rounded-md shadow-sm cursor-not-allowed opacity-50 hover:bg-gray-200" 
            : 'inline-flex w-fit items-center rounded-md bg-purple-50 px-10 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10'
        }`}
        href={`result/${carMakeId.toString()}/${carYear.toString()}`}
      >
        Next
      </Link>
    </div>
  );
};

export default FilterChoice;