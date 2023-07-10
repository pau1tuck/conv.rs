use std::env::args;
mod currency;

fn main() {
    const USAGE_MSG: &str = "Usage: conv [VALUE] [FROM] [TO]. Enter -h for help.";

    // Create an array of shell arguments. args[0] = "conv"
    let args: Vec<String> = args().collect();

    if args[1] == "-h" {
        // ! SHOW HELP PAGE
        println!("Usage: conv [AMOUNT] [CURRENCY_FROM] [CURRENCY_TO]");
    }
    // Check for errors
    if args.len() < 4 {
        eprintln!("Incorrect number of arguments. {}", USAGE_MSG);
    }

    let value: f64 = args[1]
        .parse()
        .expect("Please enter a numerical value. {USAGE_MSG}");
    let source = &args[2];
    let target = &args[3];

    let converted_value = currency::convert_currency(value, source, target);
}
