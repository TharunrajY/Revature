//question1 print even numbers
console.log("im using javascript");

function printEvenNumbers(n)
{

    for(let i=0;i<=n;i++)
    {
        if(i%2==0)
        {
            console.log(i)
        }
    }
}
printEvenNumbers(20);

//even numbers usingn do while
function printEvenNumbers(n){
    var i=0;
    do{
        if(i%2==0)
        {
            console.log(i);
        }
        i++
    }

    while(i<=n);
}

printEvenNumbers(15);


//question2 print prime numbers
function prime(num)
{
    if(num<=1)
    {
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++)
    {
        if(num%i === 0 )
        {
            return false;
        }
        return false;
    }
}
prime(5)


//3.calculator task
var sum = (a, b) => a + b;
var minus = (a, b) => a - b;
var multiply = (a, b) => a * b;
function calculator() {
    const operation = prompt("Enter operation ('sum','minus','multiply'):");

    const num1 = parseFloat(prompt("Enter the num1:"));
    const num2 = parseFloat(prompt("Enter the num2:"));

    let result;

    switch (operation) {
        case 'sum':
            result = sum(num1, num2);
            console.log(`Sum of ${num1} and ${num2} is: ${result}`);
            break;

        case 'minus':
            result = minus(num1, num2);
            console.log(`Sum of ${num1} and ${num2} is: ${result}`);
            break;

        case 'multiply':
            result = multiply(num1, num2);
            console.log(`Sum of ${num1} and ${num2} is: ${result}`);
            break;

        default:
            console.log("Invalid Operation");
    }

}


//  4. leap year or not

function isLeapYear(year){
    return(year%4===0  && year%100 !==0)|| (year%400 == 0);
}
console.log(isLeapYear(2004));
console.log(isLeapYear(1900));