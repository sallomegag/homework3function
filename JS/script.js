"use strict"

// 1. შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

function sum (...numbers) {
      let numberSum = 0;
      for (let i = 0; i < numbers.length; i++) 
      if(numbers[i] >= 0) {
        numberSum += numbers[i]
      }
      return numberSum;
    }

    let result = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
    console.log(result);

    // 2. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
    // 10, 50, 6, 7, 8, 11, 6, 3, 9
    

function sum1 (...numbers) {
  let numbersSum = 0; 
for (let item of numbers) {
  numbersSum += item;
}
return numbersSum;
}


let result1 = sum1 (10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result1);

// 3.ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

let user = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isloggedin: true
}

function printName(user) {
  if (user.isloggedin) {
      return (`${user.firstname} ${user.lastname}`)
  }
  return false
}

let resultfunction = printName(user);
console.log(resultfunction);

// 4. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

function getMax(...array) {
      console.log(Math.max(...array));
  }
  
  getMax(80, 20, 5, 100, 150, 250, 8, 3);

  // 5.For ორივე გზით და foreach-ის საშუალებით გამოიტანეთ მხოლოდ ის სიტყვებუ რონლის სიმბოლოების რაოდენობდა მეტია 4 და მოიცავს ‘av’ სიმბოელობის tთანმიმდევრობას; - include უნდა გამოიყენოთ

let array1 = ['html', 'css', 'python', 'javascript', 'bootstrap'];

for (let item of array1) {
      if (item.length > 4 && item.includes('av')) {
          console.log(item);
      }
  }

  // ან

  array1.forEach(function(element) {
        if (element.length > 4 && element.includes('av')) {
            console.log(element);
        }
    })
    
  


