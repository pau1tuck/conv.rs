import fs from "fs";
import path from "path";
import axios from "axios";
import config from "./config.json" assert { type: "json" };

/*const settings = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../config.json"), "utf-8"),
);*/

const RATES_URL = "";

let rates = [];

const CURRENCIES = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data/currencies.json"), "utf8"),
);

console.log(CURRENCIES.azn);

/*
for (let i = 0; i < currencies.length; i++) {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencies[
        i
    ].toLowerCase()}.json`;

    try {
        const response = await axios.request({ method: "GET", url });
        const data = response.data;
        const jsonData = JSON.stringify(data);
        exchangeRates.push(jsonData);
    } catch (error) {
        console.log(error);
    }
}

console.log(exchangeRates);
*/
