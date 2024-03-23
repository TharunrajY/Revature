
let n=parseInt(prompt("Enter the marks:"))
if(n>=0 && n<=100)
{
    if(n>=90)
    {
        console.log("A Grade");
    }
    if(n>=80 && n<=89)
    {
        console.log("B Grade");
    }
    if(n>=70 && n<=79)
    {
        console.log("C Grade");
    }
    if(n>=60 && n<=69)
    {
        console.log("D Grade");
    }
    if(n>=50 && n<=59)
    {
        console.log("E Grade");
    }
    else
    {
        console.log("F Grade");
    }
}
else{
    console.log("Enter the marks between 0 to 100");
}