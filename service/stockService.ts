import axios from 'axios';

const order = [
    'Mar 21',
    'Jun 21',
    'Sep 21',
    'Dec 21',
    'Mar 22',
    'Jun 22',
    'Sep 22',
    'Dec 22',
    'Mar 23',
    '3 Aug 23',
    '2 Nov 23',
    '1 Feb 24',
    '2 Mai 24',
    '1 Aug 24',
]

class StockService {
    apiClient: any;

    constructor() {
        this.apiClient = axios.create({
            baseURL: 'https://sheetdb.io/api/v1/o3wy3fdhshi6m'
        });


    }

    async fetchData(sheetName: string) {
        try {
            const response = await this.apiClient.get(`?sheet=${sheetName}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return []
        }
    }

    async getRevenue(sheetName: string) {
        try {
            const data = await this.fetchData(sheetName)
            return order.map(key => data[3][key])
        } catch (error) {
            console.error('Error getting Revenue Data:', error);
            return [];
        }
    }
}

export const stockService = new StockService();