const BASE_URL = "https://api.coingecko.com/api/v3/coins";
const API_KEY = "CG-ANWjXMCWFzwHACqqhkpaSuX5"

const getCoinList = (page, currency) => {
    return `${BASE_URL}/markets?vs_currency=${currency}&ids=bitcoin&category=layer-1&order=market_cap_desc&per_page=10&page=${page}&x_cg_demo_api_key=${API_KEY}`;
}

export { getCoinList }