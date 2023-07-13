"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchRates = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const axios_1 = tslib_1.__importDefault(require("axios"));
const currencies = JSON.parse(fs_1.default.readFileSync(path_1.default.join(process.cwd(), "data/currencies.json"), "utf8"));
const rates = [];
const fetchRates = async () => {
    const start = process.hrtime();
    const keys = Object.keys(currencies);
    const promises = keys.map(async (key) => {
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
    });
    await Promise.all(promises);
    fs_1.default.writeFileSync(path_1.default.join(process.cwd(), "data/rates.json"), JSON.stringify(rates, null, 2));
    const hrtime = process.hrtime(start);
    const elapsed = hrtime[0] + hrtime[1] / 1e9;
    process.stdout.write(`Done in ${elapsed.toFixed(3)}ms.\n`);
};
exports.fetchRates = fetchRates;
