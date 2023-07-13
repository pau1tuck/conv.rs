import fs from "fs";
import path from "path";
import axios from "axios";
const currencies = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data/currencies.json"), "utf8"));
let rates = [];
async function fetchRates() {
    for (let key in currencies) {
        if (currencies.hasOwnProperty(key)) {
            try {
                const response = await axios.request({
                    method: "GET",
                    url: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${key}.json`,
                });
                console.log(`✓ ${currencies[key]}: ${response.status}`);
                rates.push(response.data);
            }
            catch (err) {
                throw new Error(`Error: ${err}`);
            }
            finally {
            }
        }
    }
    fs.writeFileSync(path.join(process.cwd(), "data/rates.json"), JSON.stringify(rates, null, 2));
}
fetchRates();
//# sourceMappingURL=update.js.map