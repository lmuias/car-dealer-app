import FilterChoice from "@/components/FilterChoice";
import { LoaderButton } from "@/components/Loader";
import { Car } from "@/types/CarType";
import { Suspense } from "react";

export default async function Home() {
  let cars: Car[] = [];

  try {
    const response = await fetch(`${process.env.REACT_APP_LOCALE_URL_API}api/cars`, { cache: 'no-store' });
    const data = await response.json();
    cars = data.Results || [];
  } catch (error) {
    console.error('Error on receiving data', error);
  }

  return (
    <div className="">
      <main className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Car Dealer App</h2>
            <p className="mt-2 text-lg/8 text-gray-600">Find your best choice</p>
          </div>
          <Suspense fallback={<LoaderButton />}>
            <FilterChoice cars={cars}/>
          </Suspense>
        </div>
      </main>
    </div>
  );
}
