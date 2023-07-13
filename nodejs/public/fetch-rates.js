"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchRates = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const axios_1 = tslib_1.__importDefault(require("axios"));
console.time("Done in");
const currencies = JSON.parse(fs_1.default.readFileSync(path_1.default.join(process.cwd(), "data/currencies.json"), "utf8"));
let rates = [];
const fetchRates = async () => {
    for (let key in currencies) {
        if (currencies.hasOwnProperty(key)) {
            try {
                const response = await axios_1.default.request({
                    method: "GET",
                    url: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${key}.json`,
                });
                rates.push(response.data);
            }
            catch (err) {
                throw new Error(`Error: ${err}`);
            }
            finally {
            }
        }
    }
    fs_1.default.writeFileSync(path_1.default.join(process.cwd(), "data/rates.json"), JSON.stringify(rates, null, 2));
    console.timeEnd("Done in");
};
exports.fetchRates = fetchRates;
