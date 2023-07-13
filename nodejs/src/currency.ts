import fs from "fs";
import path from "path";
import { fetchRates } from "./fetch-rates";

// Convert today's date into YYYY-MM-DD form

// Check the first entry in rates.json and compare it with the current data

const lastUpdate: any = null;

fs.access(
    path.join(process.cwd(), "data/rates.json"),
    fs.constants.F_OK,
    err => {
        if (err) {
            fetchRates();
        } else {
            const lastUpdate = JSON.parse(
                fs.readFileSync(
                    path.join(process.cwd(), "data/rates.json"),
                    "utf8",
                ),
            );
        }
    },
);

// If they're the same then import the data from rates.json

// Otherwise run update.ts
