import fs from "fs";
import path from "path";
let rates = [
    {
        eur: {
            aave: 0.014897,
            ada: 3.88929,
        },
    },
];
const currencies = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data/currencies.json"), "utf8"));
for (let key in currencies) {
    console.log(currencies[key]);
}
//# sourceMappingURL=update.js.map