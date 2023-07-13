"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const fetch_rates_1 = require("./fetch-rates");
const ratesPath = path_1.default.join(process.cwd(), "data/rates.json");
let rates = [];
let lastUpdate = null;
const readRates = () => {
    rates = JSON.parse(fs_1.default.readFileSync(ratesPath, "utf8"));
    lastUpdate = rates[0].date;
    console.log(lastUpdate);
};
if (fs_1.default.existsSync(ratesPath)) {
    console.log("Currency rate data exists.");
    readRates();
}
else {
    console.log("Fetching latest currency rates...");
    (0, fetch_rates_1.fetchRates)();
}
