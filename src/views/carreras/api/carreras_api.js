export const getCarrerasBySeason = async (season) => {
    try {
        const response = await fetch(`https://api.jolpi.ca/ergast/f1/${season}/races/?format=json`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.MRData.RaceTable.Races.map(race => ({
            id: race.id,
            name: race.raceName,
            date: race.date,
            circuit: race.Circuit.circuitName,
            url: race.url
        }));
    } catch (error) {
        console.error('Error fetching carreras:', error);
        throw error;
    }
}