import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');

    if (!response.ok) {
      throw new Error('Unable to receive data from outer API');
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error receiving data:', error);
    return NextResponse.json({ message: 'Unable to retrieve machine data' }, { status: 500 });
  }
}