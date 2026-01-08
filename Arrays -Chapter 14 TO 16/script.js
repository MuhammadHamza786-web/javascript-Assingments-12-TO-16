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


  //  9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.


//  9. Initialize an array with color names. Display the array
// elements in your browser.

let colorName=["Red","Green","Blue"];

alert(colorName);

// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.

let addStart=prompt("Enter the color name to add array at the start:");

colorName.unshift(addStart);

alert(colorName);

// // b. Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the

let addEnd=prompt("Enter the color name to add array at the End");

colorName.push(addEnd);

alert(colorName);

// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.


let add_Two_Value_Start=prompt("Enter the two color name to add array at the start:");

colorName.unshift(add_Two_Value_Start);

alert(colorName);

// // d. Delete the first color in the array. Display the updated
// // array in your browser.

let delete_First_Color=prompt("Enter the color name to delete array at the Start");
alert("Delete first color to the array start");
colorName.shift();
alert(colorName);

// // f. Ask the user at which index he/she wants to add a color 
// // & color name. Then add the color to desired
// // position/index. . Display the updated array in your
// // browser.

let addUserColor=prompt("Enter the color name:");
let indexNum=prompt("which index add the color:");

indexNum=Number(indexNum);
 
colorName.splice(indexNum,0,addUserColor);

alert(colorName);


// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then
// // remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your
// // browser.

let indexNumber=prompt("which index delete the color:");

indexNumber=Number(indexNumber);

colorName.splice(indexNumber,indexNumber);

alert(colorName);   

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


let  computerAssosaries=["Keyboard","Mouse","Printer","Monitor"];

alert(computerAssosaries+"\n"+ "out:"+"\n"+computerAssosaries[0]+"\n"+"out:"+"\n"+computerAssosaries[1]+"\n"+"out:"+"\n"+computerAssosaries[2]+"\n"+"out:"+"\n"+computerAssosaries[3]);

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

let  computersAssosaries=["Keyboard","Mouse","Printer","Monitor"];

alert(computerAssosaries+"\n"+ "out:"+"\n"+computerAssosaries[3]+"\n"+"out:"+"\n"+computerAssosaries[2]+"\n"+"out:"+"\n"+computerAssosaries[1]+"\n"+"out:"+"\n"+computerAssosaries[0]);
