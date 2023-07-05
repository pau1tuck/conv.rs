use std::collections::HashMap;
use std::env::args;

fn main() {
	const GBP_THB: f64 = 44.349;
	const GBP_USD: f64 = 1.2711;
	const THB_GBP: f64 = 0.0225;
	const THB_USD: f64 = 0.0286;
	const USD_GBP: f64 = 0.7865;
	const USD_THB: f64 = 34.89;

	/*  Initialize empty conversion_rates hashmap (associative array) with string slices (&str) as keys and another hashmap as values. */
	// The inner hashmap has string slices as keys and f64 floating-point numbers as values.
	let mut conversion_rates: HashMap<&str, HashMap<&str, f64>> = HashMap::new();

	conversion_rates.insert("GBP", {
		let mut conversions: HashMap<&str, f64> = HashMap::new();
		conversions.insert("THB", GBP_THB);
		conversions.insert("USD", GBP_USD);
		conversions // No semicolon after a return statement!
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

	let args: Vec<String> = args().collect();

	if args[1] == "-h" {
		// ! SHOW HELP PAGE
		println!("Usage: conv [AMOUNT] [CURRENCY_FROM] [CURRENCY_TO]");
	}
	// Check for errors
	if args.len() != 4 {
		eprintln!(
			"Incorrect number of arguments. Usage: conv [VALUE] [FROM] [TO]. Enter -h for help page."
		);
	}

	let value: f64 = args[1].parse().expect("Please enter a value number.");

    let from = &args[2];
    let to = &args[3];
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
true;
