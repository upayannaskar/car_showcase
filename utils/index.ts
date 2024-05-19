import { CarProps } from "@/types";
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '0d4aaac8bbmsh4c3186e14012939p18c313jsnef284cf8b7e7',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };

    try {
        const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
            headers: headers,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching cars:', error);
        throw error;  // Re-throw the error after logging it
    }
}


export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};