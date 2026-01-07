// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal


let num1=prompt("Enter your first number");

let num2=prompt("Enter your second number");

if(num1>num2){
    alert("Large number is :"+num1);
}else if(num2>num1){
    alert("Large number is :"+num2);
}else{
    alert("Both number are equal")
}


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.


let userNumber=prompt("Enter your number");

if(userNumber >=1){
    alert("The number is positive");

}else if(userNumber <0){
    alert("The number is nagetive");

}else {
    alert("The numnber is zero");
}

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

let words=prompt("Enter your Alphabad word");
words=words.toLocaleLowerCase()
if(words ==="a"||words ==="e"||words ==="i"||words ==="o"||words ==="u"){
    alert("True");
}else{
    alert("false");
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }


let hour =13;

let greeting;

if(hour<18){
     greeting= "Good day";
}else{
    greeting="Good morning";
}
alert(greeting);


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

let hours=prompt("Enter your time  24 Hours");

hours=parseInt(hours);

if(hours>=0 && hours<12){
    alert("Good Morning");
    
}else if(hours>=12 && hours<18){
    alert("Good Evening"); 
}else {
    alert("Good Night");
}

