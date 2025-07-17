export const getConstructoresBySeason = async (season) => {
    try {
        const response = await fetch(`https://api.jolpi.ca/ergast/f1/${season}/constructors/?format=json`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.MRData.ConstructorTable.Constructors;
    } catch (error) {
        console.error('Error fetching constructores:', error);
        throw error;
    }
}