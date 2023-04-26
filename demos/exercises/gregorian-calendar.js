var year = 1904;

function isLeapYear(year) {
  var yearIsDivisibleBy4 = year % 4 == 0;
  var yearIsACentury = year % 100 != 0;
  var yearIsDivisibleBy400 = year % 400 == 0;
  return yearIsDivisibleBy4 && (yearIsACentury || yearIsDivisibleBy400);
}

if(isLeapYear(1904)){
    console.log("Congrats! " + year + " is a leap year!");
} else{
    console.log("Try again.... " + year + " is not a leap year!");
}
