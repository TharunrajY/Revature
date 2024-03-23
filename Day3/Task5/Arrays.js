// question1
const arr = [1, 2, 3, 4, 5, 6];
a = false;
for (i = 0; i < arr.length ; i++) {
    if (arr[i] == 2) {
        console.log(i);
        a = true;
        break;
    }
}
if (a = false) {
    console.log("Element not found in array");
}

//question 2

const fruits=["banana","mango","apple","kiwi"];
fruits.splice(2,1);
console.log(fruits);

//question3

const num=[23,45,12,67,89];
num.reverse();
console.log(num);

//question4

const num1=[23,45,12,67,89];
const max=Math.max(...num1);
console.log(max);

//question5

function secondLargestNumber(arr)
{
 arr.sort(function(a,b)
 {
    return b-a
 });
 return arr[1];
}

const n=[10,5,8,20,15,12];
const secondLargest =  secondLargestNumber(n);
console.log("Second Largest nUMBER is:", secondLargest);

//question6

const number=[1,2,3,4,5,6,7,8,9];
let sum=0;
for(i of numbers)
{
    if(i%2 === 0)
    {
        sum+=i;
    }
}
console.log(sum);

//question7

students=[];
student1={ name:"Tharun",age:22};
student2={ name:"Veera" ,age:22};
student3={ name:"Raj", age:21};
students.push(student1,student2,student3);
console.log(students);


