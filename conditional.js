const marks = 59;
let results;

switch (true) {
    case marks >= 80 && marks <= 100:
        results = "Distinction";
        break;
    case marks >= 60 && marks <= 79:
        results = "First Class";
        break;
    case marks >= 50 && marks <= 59:
        results = "Second Class";
        break;
    case marks >= 35 && marks <= 49:
        results = "Pass";
        break;
    case marks == 0 && marks <= 34:
        results = "Fail";
        break;
    default:
        results = "Enter Valid marks";
        break
}

console.log(results);