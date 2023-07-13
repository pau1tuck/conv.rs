import fs from "fs";
import path from "path";
import axios from "axios";
// import config from "./config.json" assert { type: "json" };

/*const settings = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../config.json"), "utf-8"),
);*/

// const RATES_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
console.time("Done in");
const currencies = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data/currencies.json"), "utf8"),
);

let rates: any = [];

export const fetchRates = async () => {
    for (let key in currencies) {
        if (currencies.hasOwnProperty(key)) {
            try {
                const response = await axios.request({
                    method: "GET",
                    url: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${key}.json`,
                });
                // console.log(`✓ ${currencies[key]}: Status ${response.status}`);
                rates.push(response.data);
            } catch (err) {
                throw new Error(`Error: ${err}`);
            } finally {
            }
        }
    }

    fs.writeFileSync(
        path.join(process.cwd(), "data/rates.json"),
        JSON.stringify(rates, null, 2),
    );
    console.timeEnd("Done in");
};
