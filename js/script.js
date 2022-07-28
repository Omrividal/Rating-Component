// trial number 1
// function() {
//   return this.numberButtons
// }
//
// const numberButtons = document.querySelectorAll('[data-button]')
// const submitButton = document.querySelector('[data-submit]')

// trial number 2
// function changeBg() {
//   document.getElementById("btn1").style.backgroundColor = "hsl(217, 12%, 63%)";
//   document.getElementById("btn1").style.color = "white";
// }
//
// function changeBg2() {
//   document.getElementById("btn2").style.backgroundColor = "hsl(217, 12%, 63%)";
//   document.getElementById("btn2").style.color = "white";
// }
//
// function changeBg3() {
//   document.getElementById("btn3").style.backgroundColor = "hsl(217, 12%, 63%)";
//   document.getElementById("btn3").style.color = "white";
// }
//
// function changeBg4() {
//   document.getElementById("btn4").style.backgroundColor = "hsl(217, 12%, 63%)";
//   document.getElementById("btn4").style.color = "white";
// }
//
// function changeBg5() {
//   document.getElementById("btn5").style.backgroundColor = "hsl(217, 12%, 63%)";
//   document.getElementById("btn5").style.color = "white";
// }

// trial number 3

// document.getElementById("btn1").onclick = function() {changeBackground()};
//
// function changeBackground() {
//   document.getElementById("btn1").style.backgroundColor = "hsl(217, 12%, 63%)";
// }

// trial number 4

// function changeBg() {
//   btn1.style.backgroundColor = "hsl(217, 12%, 63%)";
//   btn1.style.color = "white";
// }
//
// function  changeBg2() {
//   btn2.style.backgroundColor = "hsl(217, 12%, 63%)";
//   btn2.style.color = "white";
// }
//
// function  changeBg3() {
//   btn3.style.backgroundColor = "hsl(217, 12%, 63%)";
//   btn3.style.color = "white";
// }
//
// function  changeBg4() {
//   btn4.style.backgroundColor = "hsl(217, 12%, 63%)";
//   btn4.style.color = "white";
// }
//
// function  changeBg5() {
//   btn5.style.backgroundColor = "hsl(217, 12%, 63%)";
//   btn5.style.color = "white";
// }

// trial 5

// btn.forEach(function(btn) {
//   elem.addEventListener('click', function onClick() {
//     elem.style.backgroundColor = colors[index];
//     elem.style.color = "white"
//
//     index = index >= colors.length - 1 ? 0 : index +1;
//   });
// });


// btn1.addEventListener('click', function onClick() {
//   btn1.style.backgroundColor = colors[index];
//   btn1.style.color = "white"
//
//   index = index >= colors.length - 1 ? 0 : index +1;
// });

// wraper.addEventListener('click', function onClick() {
//   wraper.style.backgroundColor = colors[index];
//   wraper.style.color = "white"
//
//   index = index >= colors.length - 1 ? 0 : index +1;
// });


//trial 7

// const clicked = [ btn1, btn2, btn3, btn4, btn5 ].forEach(function(element) {
//    element.addEventListener("click", function onClick() {
//       element.style.backgroundColor = colors[index];
//       element.style.color = "white";
//
//       index = index >= colors.length - 1 ? 0 : index +1;
//
//       if
//       (clicked ) {
//         colors.reverse();
//       }
//
//    });
// });

// let index = 0;
// let button = 0;
// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// let btn3 = document.getElementById("btn3");
// let btn4 = document.getElementById("btn4");
// let btn5 = document.getElementById("btn5");
// const wraper = document.getElementById("wraper");
// const colors = ['hsl(217, 12%, 63%)', 'hsl(216, 12%, 24%)'];
// const btn = ['btn1', 'btn2', 'btn3', 'btn4', 'btn5'];


const mainContainer = document.querySelector(".submitForm")
const thankYou = document.querySelector(".hidden")
const submitButton = document.getElementById("sub")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener('click', () => {
  thankYou.classList.remove ("hidden")
  mainContainer.classList.add("hidden")
})

rateAgain.addEventListener('click', () => {
  thankYou.classList.add ("hidden")
  mainContainer.classList.remove ("hidden")
})

rates.forEach((rate) => {
  rate.addEventListener('click', () => {
    rating.innerHTML = rate.innerHTML
  })
})
