Coding challenge #1: Print numbers from 1 to 10
Coding challenge #2: Print the odd numbers less than 100
Coding challenge #3: Print the multiplication table with 7
Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10
Coding challenge #5: Calculate the sum of numbers from 1 to 10
Coding challenge #6: Calculate the sum of even numbers from 1 to 10
Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit
Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius
Coding challenge #10: Calculate the sum of numbers in an array of numbers
Coding challenge #11: Calculate the average of the numbers in an array of numbers
Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
Coding challenge #13: Find the maximum number in an array of numbers



1.
function printnumbers(){
    for(i = 1; i <= 10; i++)
    console.log(i)
}
printnumbers()

2.
function oddnumbers(){
    for(i = 1; i < 100; i++)
    if( i %2 !== 0){
        console.log(i)
    }
}
oddnumbers()

3.
function table7(){
    for(i = 1; i <= 10; i++){
    let result = i * 7;
    console.log(result)
    }
}
table7()

4.
function table(){
    for(i = 1; i <= 10; i++){
    for(j=1; j <= 10; j++){
        let result = i * j;{
            console.log(i + "*" + j + "=" + result)
        }
    }
    }
}
table()

5.
function sumnum(){
    let sum = 0
    for(i = 1; i <= 10; i++){
        sum += i
        console.log(sum)
    }
}
sumnum()

6.
function sumEvennum(){
    let sum = 0;
    for(i = 1; i <= 10 ; i++){
        if( i %2 == 0){
            sum += i
            console.log(sum)
        }
    }
}
sumEvennum()

7. 
function sumOddnum(){
    let sum = 0
    for(i > 10; i < 30; i++){
        if(i %2 !== 0){
            sum += i
            console.log(sum)
        }
    }
}
sumOddnum()

8.
function celsiusTofarenheitcelsius(){
    let farenheit = celsius * 9/5 + 32;
    return farenheit
}

9.
function farenheitTocelsius(farenheit){
    let celsius = 5/9 * (farenheit - 32);
    return celsius
}
farenheitTocelsius(69)


10.
function sumArray(arr){
    let total = 0;
    for(i = 0; i <= arr.length; i++){
        total += arr[i]
    }
    return total
}

11. Calculate the average of the numbers in an array of numbers
function averageArray(arr){
    let total = 0;
    for(i = 0; i <= arr.length; i++){
        total += arr[i];
    }
    let average = total/arr.length
    return average
}


12.
