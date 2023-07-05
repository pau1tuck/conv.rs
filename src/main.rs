use std::collections::HashMap;

fn main() {
    const GBP_THB: f64 = 44.3490;
    const THB_GBP: f64 = 1.0 / GBP_THB; // Reciprocal (remember to use decimal 1.0)

    /*  Initialize empty conversion_rates hashmap (associative array) with string slices (&str) as keys and another hashmap as values. */
    // The inner hashmap has string slices as keys and f64 floating-point numbers as values.
    let mut conversion_rates: HashMap<&str, HashMap<&str, f64>> = HashMap::new();

    conversion_rates.insert("GBP", {
        let mut conversions: HashMap<&str, f64> = HashMap::new();
        conversions.insert("THB", GBP_THB);
        conversions.insert("USD", 0.0);
        conversions // No semicolon after a return statement
    });

    conversion_rates.insert("THB", {
        let mut conversions: HashMap<&str, f64> = HashMap::new();
        conversions.insert("GBP", THB_GBP);
        conversions.insert("USD", 0.0);
        conversions
    });
}

/*
{
    "GBP": {
        "THB": 44.3490,
        "USD": 0.0,
    }
    "THB": {
        "GBP": 0.02,
        "USD": 0.0,
    },
}

*/
