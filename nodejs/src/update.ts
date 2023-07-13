import fs from "fs";
import path from "path";
import axios from "axios";
import config from "./config.json" assert { type: "json" };

/*const settings = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../config.json"), "utf-8"),
);*/

// const RATES_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

let rates = [
    {
        eur: {
            aave: 0.014897,
            ada: 3.88929,
        },
    },
];

const currencies = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data/currencies.json"), "utf8"),
);

// console.log(CURRENCIES["azn"]);

for (let key in currencies) {
    // console.log(currencies[key]);
    if (currencies.hasOwnProperty(key)) {
        try {
            const response = axios.request({ method: "GET", url: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${key.toLowerCase()}.json`})
        }
    catch (err) { throw new Error(`Error: ${err}`)}

    /*
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencies[
        key
    ].toLowerCase()}.json`;

    try {
        const response = await axios.request({ method: "GET", url });
        const data = response.data;
        const jsonData = JSON.stringify(data);
        exchangeRates.push(jsonData);
    } catch (error) {
        console.log(error);
    }*/
}
