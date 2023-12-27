/** 
 * function leap (year){
    * if((year %4 === 0 && year %100 !== 0) || year %400 === 0){
    *   return true; 
    * } else {
    *   return false;
    * };
 * }
 * 
 * **/

function leapYear() {
    const year = document.getElementById("yearInput").value;
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    const resultElement = document.getElementById("result");
    if (isLeap) {
        resultElement.textContent = `${year} is a leap year 🎉`;
    } else {
        resultElement.textContent = `${year} is not a leap year 😕`;
    }
}
leapYear(year);

console.log(leapYear(2043));
console.log(leapYear(1989));
 console.log(leapYear(1990));
 console.log(leapYear(2024));
 console.log(leapYear(1060));
 console.log(leapYear(1000));
