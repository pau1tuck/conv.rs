import axios from "axios";
import config from "./config.json" assert { type: "json" };
const currencies = config.currencies;
let exchangeRates = [];
for (let i = 0; i < currencies.length; i++) {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencies[i].toLowerCase()}.json`;
    const options = {
        method: "GET",
        url,
    };
    try {
        const response = await axios.request({ method: "GET", url });
        const data = response.data;
        const jsonData = JSON.stringify(data);
        exchangeRates.push(jsonData);
    }
    catch (error) {
        console.log(error);
    }
}
console.log(exchangeRates);
//# sourceMappingURL=update.js.map