                        // ....IF..ELSE &ELSE IF STATMENT,....//
                             // TESTING SET OF CONDITION //
                             
// QUESTION 1
 
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number");

// if(num1 > num2){
//   alert("Nunber one is greater then number two")
// }else if(num1 < num2){
//   alert("Nunber two is greater then number one")
// }else{
// alert("Number one and two are equal")
// }

// QUESTION 2

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var num = +prompt("Enter a  number");
 
// if(num > 0){
//   alert("The nuM is positive")
// }else if(num < 0){
//   alert("The nuM is negitive");
// }else{
//   alert("The num is zero")
// }

// QUESTION 3

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// var word =prompt("Enter a any words");

// if(word==="a" || word==="e" || word==="o" || word==="i" ||word==="u"){
//   alert("true");
// }else{
//   alert("false")
// }

// QUESTION 4

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are //  same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

// var correctPassword =12345;
// var password = +prompt("Enter a password");
// if(!password){
//   alert("Please enter your password")
// }
//  else if(correctPassword === password){
//   alert("Correct! The password you entered matches the original password")
// }else{
//   alert("Incorrect password")
// }

// QUESTION 5

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;
//  if(hour < 18){
//   greeting = "Good day"
//  }else{
//   greeting = "Good evening"
//  }
//  alert(greeting);

// QUESTION 6

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// var time = +prompt("Enter a time");
 
// if(time >= 0000 && time < 1200){
//   alert("Good morning")
// }else if(time >= 1200 && time < 1700){
//   alert("Good afternoon")
// }
// else if(time >= 1700 && time < 2100){
//   alert("Good evening")
// }
// else if(time >= 2100 && time <= 2359){
//   alert("Good night")
// }
// else{
//   alert("invalid time")
// }


                                              //.....END.....// 

//  QUESTION 1

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var arr = [];
// console.log(arr);
// var student = [];

// QUESTION 2

//  2. Declare and initialize a strings array.

// var str = ["hello"];
// console.log(str);

// QUESTION 3

// 3. Declare and initialize a numbers array.

// var num = [1,2,3];
// console.log(num)

// QUEESTION 4

// 4. Declare and initialize a boolean arr

// var arr = [true, false];
// console.log(arr)
 
// QUESTION 5

// 5. Declare and initialize a mixed array.

//  var arr = [1, 2, 3, true, false, "hira", "hibba"];
//  console.log (arr);

// QUESTION 6

// 6. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var m = ["Michael"];
// var j = ["Jhone"];
// var t = ["Toney"]
// var  mi = [320];
// var jh = [230];
// var to = [480];
// var totalMark = 500;

// document.write("score of" + " " + " " + m + "is"+ " " + mi +" "+ "percentage" +" "+ (mi/totalMark)*100  + "%<br>");
// document.write("score of" + " " +" " + j + "is" + " " + jh + " " + "percentage" + " " + (jh/totalMark)*100  + "%<br>");
// document.write("score of" + " " + " " + t + "is" + " " + to + " " + "percentage" + " " + (to/totalMark)*100  +"%<br>");


// QUESTION 7

// 9. Initialize an array with color names. Display the array
// elements in your browser.

// var arr = ["red", "blue", "green"];
// console.log(arr);

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.


// var arr = ["red", "blue", "green"];
// var color = prompt("Which color do you want to add to the beginning");
// arr.unshift("pink");
// console.log(arr);


// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser. 

 
// var arr = ["red", "blue", "green"];
// arr.push("yellow");
// console.log(arr);

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// var arr = ["red", "blue", "green"];
// arr.unshift("orange","perple");
// console.log(arr);

// d. Delete the first color in the array. Display the updated
// array in your browser.


// var arr = ["red", "blue", "green"];
// arr.shift();
// console.log(arr);

// e. Delete the last color in the array. Display the updated
// array in your browser.


// var arr = ["red", "blue", "green"];
// arr.pop();
// console.log(arr);

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

 
// var arr = ["red", "blue", "green"];
// arr.splice(1,0,"perple");
// console.log(arr);


// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. 
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.


// var arr = ["red", "blue", "green"];
// arr.splice(2,1,"orange");
// console.log(arr);

// QUESTION 8

// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities =["karachi","Lahore","Islamadad","Quetta","Peshawer"];
// console.log(cities);
// console.log(cities.slice(2,4));

// QUESTION 8

//  Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This","is","my","cat"];
 
// var string = ["This is my cat"];
 
// document.write("Array:" + arr + "<br>");
// document.write("String:" + string + "<br>");

// QUESTION 9

// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


// var arr = ["keyboarde","Mouse","Printer","Moniter"];
// console.log(arr);


// QUESTION 10

// Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

var comp =["Apple","Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(comp);