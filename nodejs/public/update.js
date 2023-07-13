import fs from "fs";
import path from "path";
const RATES_URL = "";
let rates = [];
const CURRENCIES = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data/currencies.json"), "utf8"));
console.log(CURRENCIES.azn);
//# sourceMappingURL=update.js.map