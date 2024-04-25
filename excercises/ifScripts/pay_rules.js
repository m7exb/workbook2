var payRate = 12.50;
var hoursWorked = 20;
var regularHours = 40;
var overtimePay = 1.5;
var overtimeRegularHours = regularHours * payRate
var regularTotal = (regularHours - hoursWorked) * payRate;
var overtimeHours = hoursWorked - regularHours;


if (hoursWorked > 40) {
    
    var totalOvertimePay = (payRate * overtimePay) * overtimeHours;
    var totalGross= overtimeRegularHours + totalOvertimePay ;
}
else{
    totalGross=regularTotal;
}


console.log(totalGross)
