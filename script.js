const guessBtn = document.querySelector(".guess");
const num = document.querySelector(".numInpt");
const msgContainer = document.querySelector(".output-msg");


guessBtn.addEventListener("click", function () {
    //1. first get the input number

    if (num.value != "") {
        const int_num = parseInt(num.value, 10);// conversion from a text to a number or integer in js by using parseInt()
        // 2. now call the number guessing function
        numberGuess(int_num);


    }
    else {
        msgContainer.textContent = "Enter some number ???";
        num.focus();
    }
    /*  
         for debugging purpose only
         console.log("The user entered number is:",int_num);
         console.log(typeof int_num);
}
 */



}
);


var chances = 0;
var comp_number = Math.floor(Math.random() * 100);  // this will generate a random number from 1 to 100
//console.log("Computer guessed number is ", comp_number);
function numberGuess(user_num) {
    //    console.log("recieved number is:",user_num);

    chances = chances + 1;
    if (user_num > comp_number) {
        if (user_num - comp_number <= 30) {
            msgContainer.textContent = "📈Greater than the computer guessed number!!";
            num.value = "";
            num.focus();
        }
        else {
            msgContainer.textContent = "too high !!";
            num.value = "";
            num.focus();
        }
    }
    else if (user_num < comp_number) {
        if (comp_number - user_num <= 30) {
            msgContainer.textContent = "📉Lesser than the computer guessed number!!";
            num.value = "";
            num.focus();
        }
        else {
            msgContainer.textContent = "too low !!";
            num.value = "";
            num.focus();
        }
    }

    else {
        msgContainer.innerText = "🎉 You Win! Great Job!\n\nTotal chances took : " + chances;
        guessBtn.disabled = true;
    }

}

