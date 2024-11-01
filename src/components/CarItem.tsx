import { CarModel } from "@/types/Model";
import React from "react";

interface SomeCar {
  car: CarModel;
}

const CarItem: React.FC<SomeCar> = ({ car }) => {
  return (
    <div className="flex max-w-xl flex-col items-start justify-between bg-sky-100 shadow-md rounded-lg p-6 hover:shadow-lg hover:bg-blue-200 transition-all duration-300 cursor-pointer">
      <div className="flex items-center gap-x-4 text-xs">
        <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
          {car.Make_ID}
        </p>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
          <a>
            <span className="absolute inset-0" />
            {car.Make_Name}
          </a>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-gray-600">{car.Model_ID}</p>
      </div>
      <div className="relative mt-4 flex items-center gap-x-4">
        <div className="text-sm">
          <p className="text-gray-600">{car.Model_Name}</p>
        </div>
      </div>
    </div>
  );
};

export default CarItem;