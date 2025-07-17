// Función que obtiene los pilotos de una temporada específica
export const getPilotosBySeason = async (season) => {
  try {
    const response = await fetch(`https://api.jolpi.ca/ergast/f1/${season}/drivers/?format=json`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.MRData.DriverTable.Drivers;
  } catch (error) {
    console.error('Error fetching pilotos:', error);
    throw error;
  }
};
