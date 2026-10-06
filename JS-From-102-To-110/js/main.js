
// تكاليف من 102 الي 110
// تكليف 1
// let pro = window.prompt("Print Namber From", "Example: 5-20");

// let numbers = pro.split("-");

// let num1 = Number(numbers[0]);
// let num2 = Number(numbers[1]);

// let start = Math.min(num1, num2);
// let end = Math.max(num1, num2);

// for (let i = start; i <= end; i++) {
//     document.write(i + "<br>");
// };

// تكليف 2
// function showPopup() {
//     let popup = document.createElement("div");
//     popup.className = "popup";
//     popup.style.cssText = `
//         position: fixed;
//         width: 400px;
//         padding: 30px;
//         background-color: #f5f5f5;
//         border: 1px solid #ddd;
//         left: 50%;
//         top: 50%;
//         transform: translate(-50%, -50%);
//         text-align: center;
//     `;

//     let title = document.createElement("h2");
//     title.textContent = "Welcome";

//     let text = document.createElement("p");
//     text.textContent = "Welcome To Elzero Web School";

//     let close = document.createElement("span");
//     close.textContent = "X";
//     close.className = "close";
//     close.style.cssText = `
//         position: absolute;
//         right: -10px;
//         top: -10px;
//         width: 25px;
//         height: 25px;
//         background-color: red;
//         color: white;
//         border-radius: 50%;
//         cursor: pointer;
//         font-weight: bold;
//         line-height: 25px;
//     `;
//     close.onclick = function () {
//         popup.remove();
//     };

//     popup.appendChild(close);
//     popup.appendChild(title);
//     popup.appendChild(text);
//     document.body.appendChild(popup);
// }
// setTimeout(showPopup, 5000);


// تكليف 3
// let div = document.createElement("div");
//     div.className = "popup";
//     div.textContent = "10";
//     div.style.cssText = `
//         position: fixed;
//         width: 400px;
//         padding: 30px;
//         background-color: #ddd;
//         border: 1px solid red;
//         left: 50%;
//         top: 50%;
//         transform: translate(-50%, -50%);
//         text-align: center;
//     `;
// document.body.appendChild(div);

// let counter = setInterval (function() {
//     div.textContent--;
//     if (div.textContent === "0") {
//         clearInterval(counter);
//     }
// }, 1000);


// تكليف 4
// let div = document.createElement("div");
//     div.className = "popup";
//     div.textContent = "10";
//     div.style.cssText = `
//         position: fixed;
//         width: 400px;
//         padding: 30px;
//         background-color: #ddd;
//         border: 1px solid red;
//         left: 50%;
//         top: 50%;
//         transform: translate(-50%, -50%);
//         text-align: center;
//     `;
// document.body.appendChild(div);

// let counter = setInterval (function() {
//     div.textContent--;
//     if (div.textContent === "0") {
//         location.href = "https://elzero.org";
//         clearInterval(counter);
//     }
// }, 1000);


// تكليف 5
// let div = document.createElement("div");
//     div.className = "popup";
//     div.textContent = "10";
//     div.style.cssText = `
//         position: fixed;
//         width: 400px;
//         padding: 30px;
//         background-color: #ddd;
//         border: 1px solid red;
//         left: 50%;
//         top: 50%;
//         transform: translate(-50%, -50%);
//         text-align: center;
//     `;
// document.body.appendChild(div);

// let counter = setInterval (function() { 
//     div.textContent--;
//     if (div.textContent === "5") { 
//         window.open("https://elzero.org", "_blank","width=400,height=400,top=100,left=100");
//     } if (div.textContent === "0") {
//         clearInterval(counter);        
//     }
// }, 1000);
















