// 1. Creating a new date object
let date = new Date();

// 2. Get the current date and time
console.log(date);

// 3. Get the year
console.log(date.getFullYear());

// 4. Get the month (0-11, where 0 is January and 11 is December)
console.log(date.getMonth());

// 5. Get the day of the month (1-31)
console.log(date.getDate());

// 6. Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
console.log(date.getDay());

// 7. Get the hours (0-23)
console.log(date.getHours());

// 8. Get the minutes (0-59)
console.log(date.getMinutes());

// 9. Get the seconds (0-59)
console.log(date.getSeconds());

// 10. Get the milliseconds (0-999)
console.log(date.getMilliseconds());

// 11. Get the number of milliseconds since 1 January 1970 00:00:00 UTC
console.log(date.getTime());

// 12. Set the year
date.setFullYear(2023);

// 13. Set the month
date.setMonth(0); // Sets the month to January

// 14. Set the day of the month
date.setDate(1); // Sets the date to the 1st

// 15. Set the hours
date.setHours(0); // Sets the hours to 0

// 16. Set the minutes
date.setMinutes(0); // Sets the minutes to 0

// 17. Set the seconds
date.setSeconds(0); // Sets the seconds to 0

// 18. Set the milliseconds
date.setMilliseconds(0); // Sets the milliseconds to 0

// 19. Convert a date to a string
console.log(date.toString());

// 20. Convert a date to a UTC string
console.log(date.toUTCString());

// 21. Convert a date to an ISO string
console.log(date.toISOString());

// 22. Convert the date portion of a Date object into a readable string
console.log(date.toDateString());

// 23. Convert the time portion of a Date object to a string
console.log(date.toTimeString());

// 24. Get the date as a string, using locale conventions
console.log(date.toLocaleDateString());

// 25. Get the time as a string, using locale conventions
console.log(date.toLocaleTimeString());

// 26. Get the date and time as a string, using locale conventions
console.log(date.toLocaleString());
