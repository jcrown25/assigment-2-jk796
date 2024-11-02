function reverseString() {
    let str = document.getElementById("input1").value;
    let reversedStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    document.getElementById("result1").innerHTML = "Reversed string: " + reversedStr;
}

function checkPalindrome(){
    let num = document.getElementById("input2").value;
    let store = document.getElementById("input2").value;

    let revNum = 0;
    let temp = 0;

    while(num > 0){
        temp = num % 10;
        revNum = revNum * 10 + temp;
        num = parseInt(num / 10);  
    }

    document.getElementById("result2").innerHTML = revNum;

    if(revNum == store){
        document.getElementById("result2").innerHTML = store.toString() + " is a Palindrome number";
    }
    else{
        document.getElementById("result2").innerHTML = store.toString() + " is not a Palindrome number";
    }
}

function calculateTotalAmount(){
let subTotal = parseFloat(document.getElementById("input3").value);
let percentageOfTip = parseFloat(document.getElementById("input4").value);

let totalAmount = subTotal + (percentageOfTip / 100) * subTotal;

document.getElementById("result3").innerHTML = "The total amount to be paid including the tip is: $" + totalAmount.toString();
}

function checkInput(event) {
   const keyCheck = event.key;
   
   if (!/^[a-zA-Z\s]*$/.test(keyCheck)) {
       
       event.preventDefault();
    }
}