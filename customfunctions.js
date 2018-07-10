// The following function is an example that returns a boolean value:
function ISPRIME(num) {
    if (num <= 1 || !Number.isInteger(num)) return false; // validates input
    // checks natural numbers below the square root (not optimal)
    for (var factor = Math.floor(Math.sqrt(num)); factor > 1; factor--) {
        if (num % factor == 0) return false;
    }
    return true;
}

// The following function is an example that's computation-intensive for high inputs:
function NTHPRIME(n) {
    var primeCount = 0;
    for (var num = 2; primeCount < n; num++) {
        if (ISPRIME(num)) primeCount++;
    }
    return num - 1;
}

// The following function is an example that returns a string:
function GETDAY() {
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[d.getDay()];
}