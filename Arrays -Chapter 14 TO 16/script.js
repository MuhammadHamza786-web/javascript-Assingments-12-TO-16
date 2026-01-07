// 1. Declare an empty array using JS literal notation to store
// student names in future.

let student =[];

// 2. Declare an empty array using JS object notation to store
// student names in future.


let students = new Array();


// 3. Declare and initialize a strings array.

let fruitName=["Banana", "Mango" ,"Apple"];

alert(fruitName);

// 4. Declare and initialize a numbers array.

let numbers=[1,2,3,4,5];

alert(numbers);

// 5. Declare and initialize a boolean array.

let check=[true,false];

alert(check);

// 6. Declare and initialize a mixed array.

let mix=["Hamza","Arfeen","Saad",1,2,3,true,false];

alert(mix);

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:



let qualifications=["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PHD"];

document.write(qualifications);

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


let  studentName=["Hamza","Saqlain","Mateen"];

let studentScore=[230,150,180];

console.log("Score of"+ studentName[0]+"is"+studentScore[0]  + "."+(studentScore[0]/500)*100 +"%")

console.log("Score of"+ studentName[1]+"is"+studentScore[1]  + "."+(studentScore[1]/500)*100 +"%")

console.log("Score of"+ studentName[2]+"is"+studentScore[2]  + "."+(studentScore[2]/500)*100 +"%")


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.


let cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

cities=cities.splice(2,2);

console.log(cities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

let arr=["This ", "is" , "my" , "cat" ];
 let result=arr.join("");
 console.log(result);
