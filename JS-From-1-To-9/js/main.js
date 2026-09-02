// 1
console.log("%cElzero", "color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial;");

// 2
console.log("%cElzero %cweb %cschool","color: red;font-size: 40px;" , "color: green;font-size: 40px;font-weight: bold; ", "color: white;font-size: 40px;");

// 3
console.group("group 1");
console.log("message one");
console.log("message two");
console.groupCollapsed("child group");
console.log("message one");
console.log("message two");
console.groupCollapsed("grand child group");
console.log("message one");
console.log("message two");
console.groupEnd("group 2");
console.log("message one");
console.log("massge two");

// 4
// console.table(["elzero","ahmed","sameh","gamal","aya"])

// 5
// console.log("Iam In Console");
// document.write("Iam In Page");


