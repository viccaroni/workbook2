var davePayRate = 15.5;
var daveHoursWorked = 40;

if (daveHoursWorked > 40) {
  console.log(
    "Dave's pay for this week is " + daveHoursWorked * davePayRate * 1.5
  );
} else {
  console.log("Dave's pay for this week is " + daveHoursWorked * davePayRate);
}

var alliePayRate = 10.1;
var allieHoursWorked = 20;
if (allieHoursWorked > 40) {
  console.log(
    "Allie's pay for this week is " + allieHoursWorked * alliePayRate * 1.5
  );
} else {
  console.log(
    "Allie's pay for this week is " + allieHoursWorked * alliePayRate
  );
}
