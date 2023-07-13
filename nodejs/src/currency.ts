import fs from "fs";
import path from "path";
import { fetchRates } from "./fetch-rates";

// Initialize variables
const ratesPath = path.join(process.cwd(), "data/rates.json");
let rates: any = [];
let lastUpdate: any = null;

// Check the existence of rates.json or update()
const readRates = () => {
    rates = JSON.parse(fs.readFileSync(ratesPath, "utf8"));
    lastUpdate = rates[0].date;
    console.log(lastUpdate);
};

if (fs.existsSync(ratesPath)) {
    console.log("Currency rate data exists.");
    readRates();
} else {
    console.log("Fetching currency rate data...");
    fetchRates();
}

// Convert today's date into YYYY-MM-DD form

// Check the first entry in rates.json and compare it with the current data

// If they're the same then import the data from rates.json

// Otherwise run update.ts
