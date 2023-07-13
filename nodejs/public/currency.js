"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const fetch_rates_1 = require("./fetch-rates");
const lastUpdate = null;
fs_1.default.access(path_1.default.join(process.cwd(), "data/rates.json"), fs_1.default.constants.F_OK, err => {
    if (err) {
        (0, fetch_rates_1.fetchRates)();
    }
    else {
        const lastUpdate = JSON.parse(fs_1.default.readFileSync(path_1.default.join(process.cwd(), "data/rates.json"), "utf8"));
    }
});
