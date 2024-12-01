// Q1

// var num= prompt('enter the number')
// console.log(num)

// Q2


// var num = prompt('enter the number')

// if (num % 3 === 0 && num % 4 === 0) {
//     console.log("yes");
// } else {
//     console.log("no");
// }


// Q3

// var num1 = prompt('entre the frist number ')
// var num2 = prompt('entre the second number ')

// if (num1 > num2 ){
//     console.log (num1) 

// }else if(num2 > num1){

//     console.log (num2)
// } else{

//     console.log('equl')
// }
   

// Q4

// var num = prompt('entre the number')


// if(num < 0) {
//     console.log ('negative')
// }else{
//     console.log ('positive')
// }

// Q5

// var num1 = prompt('entre the frist number')
// var num2 = prompt('entre the secand number')
// var num3 = prompt('entre the third number')


// var  maxNum = num1;
// var  minNum = num1;


// if (num2 > maxNum) {
//     maxNum = num2;
// }
// if (num2 < minNum) {
//     minNum = num2;
// }


// if (num3 > maxNum) {
//     maxNum = num3;
// }
// if (num3 < minNum) {
//     minNum = num3;
// }

// console.log('max-element= ' + maxNum);
// console.log('min-element= ' + minNum);


// Q6

// var number = prompt("Enter the number:");


// if (number % 2 === 0) {
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
// }

// Q7

// var char = prompt("Enter a character:");

// if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || 
//     char === 'i' || char === 'I' || char === 'o' || char === 'O' || 
//     char === 'u' || char === 'U') {
//     console.log("The character is a vowel.");
// } else {
//     console.log("The character is a consonant.");
// }



// Q8

// var num = prompt("Enter an integer:");

// for ( i = 1; i <= num; i++) {
//     console.log(i);
// } 

// Q9

// var num = prompt("Enter an integer:");

// for ( i = 1; i <= 12; i++) {
//     console.log(i * num);
// } 


// Q10

// var num = prompt("Enter the number:");


// for (  i = 1; i <= num ; i++) {
//     if(i % 2 === 0) {
//         console.log(i)

//     }
// }

// Q11


// var num1 = prompt("Enter the First number:");
// var num2 = prompt("Enter the Second number:");


// console.log(num1**num2)


// Q12


// var subject1 = +prompt("Enter marks for Subject 1:");
// var subject2 = +prompt("Enter marks for Subject 2:");
// var subject3 = +prompt("Enter marks for Subject 3:");
// var subject4 = +prompt("Enter marks for Subject 4:");
// var subject5 = +prompt("Enter marks for Subject 5:");


// var total = subject1 + subject2 + subject3 + subject4 + subject5 ;


// var average = total / 5;


// var percentage = (total / 500) * 100; 


// console.log("Total Marks: " + total);
// console.log("Average Marks: " + average);
// console.log("Percentage: " + percentage + "%");


// Q13



// var month = +prompt("Enter the month number (1-12):");

// month = +month; 

// var days;

// if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//     days = 31;
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     days = 30;
// } else if (month === 2) {
//     days = 29;

// } else {
  
//     console.log("Invalid month number. Please enter a number between 1 and 12.");
// }

// if (days) {
//     console.log("The number of days in month " + month + " is: " + days);
// }

// Q14

// var math = +prompt("Enter marks for Math:");
// var physics = +prompt("Enter marks for Physics:");
// var chemistry = +prompt("Enter marks for Chemistry:");
// var bio = +prompt("Enter marks for Bio:");
// var computer = +prompt("Enter marks for Computer:");

// var grade;

// if (math >= 90) {
//     grade = "A";
// } else if (math >= 80) {
//     grade = "B";
// } else if (math >= 70) {
//     grade = "C";
// } else if (math >= 60) {
//     grade = "D";
// } else if (math >= 50) {
//     grade = "E";
// } else {
//     grade = "F";
// }
// console.log("math: " + math.toFixed(2) + "%" + "Grade: " + grade);

// if (physics >= 90) {
//     grade = "A";
// } else if (physics >= 80) {
//     grade = "B";
// } else if (physics >= 70) {
//     grade = "C";
// } else if (physics >= 60) {
//     grade = "D";
// } else if (physics >= 50) {
//     grade = "E";
// } else {
//     grade = "F";
// }
// console.log("physics: " + physics.toFixed(2) + "%" + "Grade: " + grade);

// if (chemistry >= 90) {
//     grade = "A";
// } else if (chemistry >= 80) {
//     grade = "B";
// } else if (chemistry >= 70) {
//     grade = "C";
// } else if (chemistry >= 60) {
//     grade = "D";
// } else if (chemistry >= 50) {
//     grade = "E";
// } else {
//     grade = "F";
// }
// console.log("chemistry: " + chemistry.toFixed(2) + "%" + "Grade: " + grade);


// if (bio >= 90) {
//     grade = "A";
// } else if (bio >= 80) {
//     grade = "B";
// } else if (bio >= 70) {
//     grade = "C";
// } else if (bio >= 60) {
//     grade = "D";
// } else if (bio >= 50) {
//     grade = "E";
// } else {
//     grade = "F";
// }
// console.log("bio: " + bio.toFixed(2) + "%" + "Grade: " + grade);


// if (computer  >= 90) {
//     grade = "A";
// } else if (computer  >= 80) {
//     grade = "B";
// } else if (computer  >= 70) {
//     grade = "C";
// } else if (computer  >= 60) {
//     grade = "D";
// } else if (computer  >= 50) {
//     grade = "E";
// } else {
//     grade = "F";
// }
// console.log("computer : " + computer .toFixed(2) + "%" + "Grade: " + grade);



// Q15

// var month = +prompt("Enter the month number:");

// var days;

// switch(month) {
//     case 1:  
//     case 3:  
//     case 5: 
//     case 7:  
//     case 8:  
//     case 10: 
//     case 12: 
//         days = 31;
//         break;
//     case 4:  
//     case 6:  
//     case 9:  
//     case 11: 
//         days = 30;
//         break;
//     case 2:  
//         days = 29;
//         break;
//     default:
//         console.log("Invalid month number. Please enter a number between 1 and 12.");
// }

// if (days) {
//     console.log(`The number of days in month ${month} is: ${days}`);
// }


// Q16


// var character = prompt("Enter an alphabet:");


//     switch (character) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             console.log("The character " + character + " is a vowel.");
//             break;
//         default:
//             console.log("The character " + character + " is a consonant.");
//             break;
//     }


// Q17

// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");


// switch (true) {
//     case (num1 > num2):
//         console.log("The maximum number is: " + num1);
//         break;
//     case (num1 < num2):
//         console.log("The maximum number is: " + num2);
//         break;
// }

// Q18



// var number = +prompt("Enter a number:");


// switch (number % 2) {
//     case 0:
//         console.log("The number " + number + " is even.");
//         break;
//     case 1:
//         console.log("The number " + number + " is odd.");
//         break;
// }

// Q19

// var number = +prompt("Enter a number:");


// switch (true) {
//     case (number > 0):
//         console.log("The number " + number + " is positive.");
//         break;
//     case (number < 0):
//         console.log("The number " + number + " is negative.");
//         break;
// }


// Q20


// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");
// var operation = prompt("Enter the operation (+, -, *, /):");


// switch (operation) {
//     case '+':
//         console.log("The result of " + num1 + " + " + num2 + " is: " + (num1 + num2));
//         break;
//     case '-':
//         console.log("The result of " + num1 + " - " + num2 + " is: " + (num1 - num2));
//         break;
//     case '*':
//         console.log("The result of " + num1 + " * " + num2 + " is: " + (num1 * num2));
//         break;
//     case '/':
//             console.log("The result of " + num1 + " / " + num2 + " is: " + (num1 / num2));
//         break;

// }


// var hamada = 13 ;

// // for ( ; 25 <= hamada; ) {
// //     console.log(hamada)
// // }

// while(hamada <= 25){
//     console.log("welcome")

//     hamada++
// }


// i = 18 

// do{
//     console.log("welcome")
//     i++
// }while(i <= 25)


    // for(i = 18; i <= 25; i++){


    //     if(i == 20){
    //         console.log("im hereeeeeee")
    //         break;
    //     }
    //     console.log("welcome")
    // }

    var hoda = '';

for( i = 1990; i <= 2024; i++){
    
    hoda += '<option>'+ i +'</option>';


}
document.getElementById('demo').innerHTML = hoda;


// function userData(userAge , userName){
//     console.log( "user age is : "+  userAge + " user name is : "+ userName);
// }

// userData(20 , 'hoda');

// function multiNum(num1 , num2){
//     var result = num1 * num2;
//     return result;

// }
// var x = multiNum(2 , 3);
// console.log(x);


// function getSum(){
//     var num1 = window.prompt('enter your first number');
//     var num2 = window.prompt('enter your second number');

//     var result = num1 + num2;
    
//     if(result > 4000){
//     console.log('100')
// }else{
//     console.log(result)
// }

    
// }



box ='';

for(i =1; i <= 100; i++){

    box += '<h1>hello</h1>'
}
document.getElementById('demo2').innerHTML = box;
