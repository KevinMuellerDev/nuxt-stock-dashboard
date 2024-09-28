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

const comp = [
    {
        "name": "Apple",
        "abbreviation": "$AAPL",
        "logo":"/img/apple.png",
        "revenueRow": 5,
        "netIncomeRow": 36,
        "grossMarginRow": 23
    },
    {
        "name": "Amazon",
        "abbreviation": "$AMZN",
        "logo":"/img/amazon.png",
        "revenueRow": 9,
        "netIncomeRow": 41,
        "grossMarginRow": 15
    },
    {
        "name": "Alphabet",
        "abbreviation": "$GOOG",
        "logo":"/img/google.png",
        "revenueRow": 5,
        "netIncomeRow": 41,
        "grossMarginRow": 25
    },
    {
        "name": "Meta",
        "abbreviation": "$META",
        "logo":"/img/meta.png",
        "revenueRow": 5,
        "netIncomeRow": 27,
        "grossMarginRow": 11
    },
    {
        "name": "Microsoft",
        "abbreviation": "$MSFT",
        "logo":"./img/microsoft.png",
        "revenueRow": 9,
        "netIncomeRow": 30,
        "grossMarginRow": 15
    },
    {
        "name": "Nvidia",
        "abbreviation": "$NVDA",
        "logo":"/img/nvidia.png",
        "revenueRow": 5,
        "netIncomeRow": 29,
        "grossMarginRow": 11
    },
    {
        "name": "Tesla",
        "abbreviation": "$TSLA",
        "logo":"/img/tesla.png",
        "revenueRow": 13,
        "netIncomeRow": 44,
        "grossMarginRow": 26
    }
]



class StockService {
    apiClient: any;
    companies:Object = comp;

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