import fs from "fs";
import path from "path";
import axios from "axios";
// import config from "./config.json" assert { type: "json" };

/*const settings = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../config.json"), "utf-8"),
);*/

// const RATES_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
// console.time("Done in");
const currencies = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data/currencies.json"), "utf8"),
);

let rates: any = [];

export const fetchRates = async () => {
    const start = process.hrtime();
    const keys = Object.keys(currencies);
    const promises = keys.map(async key => {
        try {
            const response = await axios.request({
                method: "GET",
                url: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${key}.json`,
            });
            rates.push(response.data);
            console.log(currencies[key], "retrieved");
        } catch (err) {
            throw new Error(`Error: ${err}`);
        }
    });

    await Promise.all(promises);

    fs.writeFileSync(
        path.join(process.cwd(), "data/rates.json"),
        JSON.stringify(rates, null, 2),
    );
    const hrtime = process.hrtime(start);
    const elapsed = hrtime[0] + hrtime[1] / 1e9; // convert to seconds
    // const elapsed = hrtime[0] * 1000 + hrtime[1] / 1e6; // convert to milliseconds

    process.stdout.write(`Done in ${elapsed.toFixed(3)}ms.\n`);
    // console.timeEnd("Done in");
};
