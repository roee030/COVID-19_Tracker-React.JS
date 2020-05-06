import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

//total data
export const fetchData = async () => {
    try {
        const {data: {confirmed,recovered,deaths, lastUpdate} } = await axios.get(url)
        
        return { 
            confirmed,
            recovered,
            deaths,
            lastUpdate
        };
        
    } catch (error) {
        console.log(error);
        
    }
}
//individual data to chartjs
export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`)

        const modifiedData = data.map((dailyData) =>  ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        console.log(modifiedData);
        
        return modifiedData

    } catch (error) {
        
    }
}