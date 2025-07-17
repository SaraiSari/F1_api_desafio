export const getResultadosBySeason = async (season) => {
    try {
        const response = await fetch(`https://api.jolpi.ca/ergast/f1/${season}/results/?format=json`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Devuelve la estructura cruda: carreras y resultados completos
        return data.MRData.RaceTable.Races;
    } catch (error) {
        console.error('Error fetching resultados:', error);
        throw error;
    }
}
