const BASE_URL = "https://api.coingecko.com/api/v3/coins";
const API_KEY = "CG-ANWjXMCWFzwHACqqhkpaSuX5"

const getCoinList = () => {
    return `${BASE_URL}/markets?vs_currency=usd&ids=bitcoin&category=layer-1&order=market_cap_desc&per_page=20&page=1&x_cg_demo_api_key=${API_KEY}`;
}

export {getCoinList}