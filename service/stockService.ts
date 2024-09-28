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
    'Aug 23',
    'Nov 23',
    'Feb 24',
    'Mai 24',
    'Aug 24',
]

const comp = [
    {
        "name": "Apple",
        "abbreviation": "$AAPL",
        "logo": "/img/apple.png",
        "revenueRow": 0,
        "netIncomeRow": 1,
        "grossMarginRow": 2
    },
    {
        "name": "Amazon",
        "abbreviation": "$AMZN",
        "logo":"/img/amazon.png",
        "revenueRow": 0,
        "netIncomeRow": 1,
        "grossMarginRow": 2
    },
    {
        "name": "Alphabet",
        "abbreviation": "$GOOG",
        "logo":"/img/google.png",
        "revenueRow": 0,
        "netIncomeRow": 1,
        "grossMarginRow": 2
    },
    {
        "name": "Meta",
        "abbreviation": "$META",
        "logo":"/img/meta.png",
        "revenueRow": 0,
        "netIncomeRow": 1,
        "grossMarginRow": 2
    },
    {
        "name": "Microsoft",
        "abbreviation": "$MSFT",
        "logo":"./img/microsoft.png",
        "revenueRow": 0,
        "netIncomeRow": 1,
        "grossMarginRow": 2
    },
    {
        "name": "Nvidia",
        "abbreviation": "$NVDA",
        "logo":"/img/nvidia.png",
        "revenueRow": 0,
        "netIncomeRow": 1,
        "grossMarginRow": 2
    },
    {
        "name": "Tesla",
        "abbreviation": "$TSLA",
        "logo":"/img/tesla.png",
        "revenueRow": 0,
        "netIncomeRow": 1,
        "grossMarginRow": 2
    }

]



class StockService {
    apiClient: any;
    companies: Object = comp;

    constructor() {
        this.apiClient = axios.create({
            baseURL: 'https://nuxt-stock.free.beeceptor.com/'
        });


    }

    async fetchData(sheetName: string) {
        try {
            const response = await this.apiClient.get(`${sheetName}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return []
        }
    }

    async getRevenue(sheetName: string, index: number) {
        try {
            const data = await this.fetchData(sheetName)
            console.log(data[index]);
            
            return order.map(key => data[index][key])
            
        } catch (error) {
            console.error('Error getting Revenue Data:', error);
            return [];
        }
    }

}

export const stockService = new StockService();