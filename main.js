// removing the items
var remove = document.getElementsByClassName("fa-minus-square");
for (var i =0; i<remove.length; i++) {
  var button = remove[i];
  button.addEventListener("click", function(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    totalSum();
  });
}
// fin de remove the items


// haert color change 

var hearts = document.getElementsByClassName("fa-heart");
for (let heart of hearts){
  heart.addEventListener("click", function() {
    if (heart.style.color == "gray") {
heart.style.color ="red";
} else {
  heart.style.color= "gray";
}
  });
} 

// finish of heart color change!


//increment and descriment
let buttonPlus = document.getElementsByClassName("fa-angle-double-up");
 
 for (let plus of buttonPlus) {
   plus.addEventListener("click", function() {
     let t= plus.nextElementSibling.value++;
     totalSum()
   }); 
 }

let buttonMinus = document.getElementsByClassName("fa-angle-double-down");
for (let minus of buttonMinus){
  minus.addEventListener("click", function() {
    if(minus.previousElementSibling.value >0)
    minus.previousElementSibling.value--;
    
    else 
    minus.previousElementSibling.value
    totalSum()
  });

}
// fin de increment

function totalSum() {
let quantity = document.getElementsByClassName("cart-quatity-input");
let prices = document.getElementsByClassName("price");
let sum = 0;
for (let i=0; i<quantity.length; i++) {
    // console.log(quantity[i].value);
  // console.log(prices[i].innerHTML);
  sum += quantity[i].value * prices[i].innerHTML;
}
return (document.getElementsByClassName("totalPrice")[0].innerHTML = sum);
}

