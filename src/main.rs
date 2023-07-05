use std::env::args;
mod currency;

fn main() {
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

    let currency_conversion_rates = currency::get_currency_conversion_rates();
}
