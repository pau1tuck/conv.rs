use std::collections::HashMap;

const GBP_THB: f64 = 44.349;
const GBP_USD: f64 = 1.2711;
const THB_GBP: f64 = 0.0225;
const THB_USD: f64 = 0.0286;
const USD_GBP: f64 = 0.7865;
const USD_THB: f64 = 34.89;

pub fn convert_currency(value: f64, source: &str, target: &str) -> f64 {
    // get value (for 1 unit) using source reference (multiplier)
    let currencies = get_conversion_rates();
    let multiplier = currencies[source][target]; // e.g. currencies["GBP"]["THB"]
    let converted_value = value * multiplier;
    // return new value
    converted_value
}

pub fn get_conversion_rates() -> HashMap<&'static str, HashMap<&'static str, f64>> {
    /*  Initialize empty conversion_rates hashmap (associative array) with string slices (&str) as keys and another hashmap as values.
    The inner hashmap has string slices as keys and f64 floating-point numbers as values. */
    let mut conversion_rates: HashMap<&str, HashMap<&str, f64>> = HashMap::new();

    conversion_rates.insert("GBP", {
        let mut conversions: HashMap<&str, f64> = HashMap::new();
        conversions.insert("THB", GBP_THB);
        conversions.insert("USD", GBP_USD);
        conversions // Remember: No semicolon after a return statement!
    });

    conversion_rates.insert("USD", {
        let mut conversions: HashMap<&str, f64> = HashMap::new();
        conversions.insert("GBP", USD_GBP);
        conversions.insert("THB", USD_THB);
        conversions
    });

    conversion_rates.insert("THB", {
        let mut conversions: HashMap<&str, f64> = HashMap::new();
        conversions.insert("GBP", THB_GBP);
        conversions.insert("USD", THB_USD);
        conversions
    });
    conversion_rates
}
