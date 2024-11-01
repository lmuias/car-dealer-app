import { CarModel } from "@/types/Model";
import React from "react";
import CarItem from "./CarItem";
import Link from "next/link";

export interface Cars {
  cars: CarModel[];
  makeId: string;
  year: string;
}

const CarList: React.FC<Cars> = ({ cars, makeId, year }) => {
  return (
    <div className="bg-white py-24 sm:py-32 flex flex-col gap-4">
      <Link 
        className='inline-flex self-center w-fit items-center rounded-md bg-purple-50 px-20 py-2 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10'
        href={'/'}
      >
        Back
      </Link>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Result for MakeId: {makeId}- Year: {year}</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Choose your best model</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {cars.map((car, index) => (
            <CarItem car={car} key={`${car.Model_ID} + ${index}`}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarList;