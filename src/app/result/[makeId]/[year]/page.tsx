import CarList from "@/components/CarList";
import { LoaderButton } from "@/components/Loader";
import { FetchCarType } from "@/types/FetchCarType";
import { Suspense } from "react";

type ParamsType = {
  params: {
    makeId: string;
    year: string;
  };
};

export const generateStaticParams = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_LOCALE_URL_API}result/makeId/year`);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    
    const data = await res.json();
    const paths = data.map((car: FetchCarType) => ({
      makeId: car.makeId.toString(),
      year: car.year.toString(),
    }));

    return paths;
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
};

const ResultPage = async ({ params }: ParamsType) => {
  const { makeId, year } = await params;

  try {
    const res = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    
    const resultData = await res.json();

    return (
      <Suspense fallback={<LoaderButton />}>
        <CarList makeId={makeId} year={year} cars={resultData.Results}/>
      </Suspense>
    );
  } catch (error) {
    console.error("Error fetching vehicle data:", error);
    return <div>Error loading vehicle data.</div>;
  }
};

export default ResultPage;