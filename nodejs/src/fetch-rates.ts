import fs from "fs";
import path from "path";
import axios from "axios";
// import config from "./config.json" assert { type: "json" };

// Read all currency codes and names from currencies.json
// console.time("Done in");
const currencies = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data/currencies.json"), "utf8"),
);

const rates: any = [];

export const fetchRates = async () => {
    // Measure the time it takes to retrieve all of the data
    const start = process.hrtime();

    // Map over the currencies object in currencies.json
    const keys = Object.keys(currencies);
    const promises = keys.map(async key => {
        try {
            const response = await axios.request({
                method: "GET",
                url: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${key}.json`,
            });
            rates.push(response.data);
            // console.log(currencies[key], "retrieved");
        } catch (err) {
            throw new Error(`Error: ${err}`);
        }
    });
    await Promise.all(promises);

    // Write the downloaded data to rates.json
    fs.writeFileSync(
        path.join(process.cwd(), "data/rates.json"),
        JSON.stringify(rates, null, 2),
    );

    // Measure and write the data retrieval time to stdout
    const hrtime = process.hrtime(start);
    const elapsed = hrtime[0] + hrtime[1] / 1e9; // convert to seconds
    // const elapsed = hrtime[0] * 1000 + hrtime[1] / 1e6; // convert to milliseconds
    process.stdout.write(`Done in ${elapsed.toFixed(3)}ms.\n`);
    // console.timeEnd("Done in");
};
