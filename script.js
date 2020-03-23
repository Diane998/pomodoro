let workTimeDisplay = document.querySelector("#work-time-display");
let timer = document.querySelector(".timer");

let workTime = 25;
workTimeDisplay.textContent = workTime;
let timeButtons = document.querySelectorAll(".timer-btn");
timeButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        if (this.id == "subtract-five") {
            if (workTime > 5) {
                workTime -= 5;
                workTimeDisplay.textContent = workTime;
                timer.textContent = convertSeconds(workTime * 60);
            }
        } else if (this.id == "add-five") {
            if (workTime < 90) {
                workTime += 5;
                workTimeDisplay.textContent = workTime;
                timer.textContent = convertSeconds(workTime * 60);
            }
        }
    })
});


let startBtn = document.querySelector("#start-btn");
let giveUpBtn = document.querySelector("#give-up-btn");
let settings = document.querySelector(".work-time-settings");
let interterval;
startBtn.addEventListener("click", function() {
    countdown(), interterval = setInterval(countdown, 1000);
    focusMode();
    continueOrQuit.style.display = "none";
    question.style.display = "block";
    message.textContent = "";
    randomQuote();
});


giveUpBtn.addEventListener("click", function() {
    continueOrQuit.style.display = "block";
    continueOrQuit.style.height = "8em";
    question.style.display = "block";
    message.textContent = "";
    yesBtn.style.display = "inline-block", noBtn.style.display = "inline-block";
    askToContinueOrQuit();
    continueOrQuit.style.margin = "1.5em";
    // let ask = (question, yes, no) => {
    //     (confirm(question)) ? yes() : no();
    // }

    // ask("Are you sure you want to give up?",
    //     () => {
    //         alert("You gave up try again.");
    //         main();
    //         clearInterval(interterval);
    //         counter = 0;
    //         timer.textContent = convertSeconds(workTime * 60 - counter);
    //     },
    //     () => alert("Good now focus!")
    // );
});


let continueOrQuit = document.querySelector(".continue-or-quit");
let question = document.querySelector("#question");
let message = document.querySelector("#message");
let yesBtn = document.querySelector("#yes");
let noBtn = document.querySelector("#no");
let askToContinueOrQuit = () => {
    [...continueOrQuit.children].forEach(btn => {
        btn.addEventListener("click", function() {
            if (this.id == "yes") {
                message.textContent = "You gave up try again.";
                question.style.display = "none";
                main("You gave up try again.");
                clearInterval(interterval);
                counter = 0;
                timer.textContent = convertSeconds(workTime * 60 - counter);
                yesBtn.style.display = "none", noBtn.style.display = "none";
                continueOrQuit.style.height = "4em";
            } else {
                message.textContent = "Good now focus!";
                question.style.display = "none";
                yesBtn.style.display = "none", noBtn.style.display = "none";
                continueOrQuit.style.height = "4em";
            }
        })
    })
};


let counter = 0;
let convertSeconds = (s) => {
    let min = Math.floor(s / 60);
    let sec = s % 60;
    return `${min} : ${sec}`;
};


timer.textContent = convertSeconds(workTime * 60 - counter);

let countdown = () => {
    // if (counter != workTime * 60) {
    //     counter++;
    //     timer.textContent = convertSeconds(workTime * 60 - counter);
    // } else {
    //     alert(`Congratulations you've focused for ${workTime} minutes.`);
    //     clearInterval(interterval);
    //     main();
    // }
    (counter != workTime * 60) ? (counter++, 
        timer.textContent = convertSeconds(workTime * 60 - counter))
    :   (alert(`Congratulations you've focused for ${workTime} minutes.`),
        clearInterval(interterval),
        main());
};

let main = (message) => {
    // if (message) {
    //     continueOrQuit.style.display = "block";
    //     message.textContent = message;
    //     question.style.display = "none";
    //     continueOrQuit.style.height = "4em";
    //     settings.style.display = "grid";
    //     giveUpBtn.style.display = "none";
    //     startBtn.style.display = "block";
    // } else {
    //     settings.style.display = "grid";
    //     giveUpBtn.style.display = "none";
    //     startBtn.style.display = "block";
    //     continueOrQuit.style.display = "none";
    // }
    (message) ? (continueOrQuit.style.display = "block",
        message.textContent = message, question.style.display = "none",
        continueOrQuit.style.height = "4em", settings.style.display = "grid",
        giveUpBtn.style.display = "none", startBtn.style.display = "block")
    : (settings.style.display = "grid", giveUpBtn.style.display = "none",
        startBtn.style.display = "block", ontinueOrQuit.style.display = "none");
};

// let main = () => {
//     settings.style.display = "grid";
//     giveUpBtn.style.display = "none";
//     startBtn.style.display = "block";
//     continueOrQuit.style.display = "none";
// };

let focusMode = () => {
    settings.style.display = "none";
    startBtn.style.display = "none"; 
    giveUpBtn.style.display = "block";
};


let quotesArr = [`“Productivity is being able to do things that you were never able to do before.” ~ Franz Kafka`,
    `“Life is too complicated not to be orderly.” ~ Martha Stewart`, 
    `“While one person hesitates because he feels inferior, the other is busy making mistakes and becoming superior.” —Henry Link`,
    `“The winners in life think constantly in terms of I can, I will, and I am. Losers, on the other hand, concentrate their waking thoughts on what they should have or would have done, or what they can’t do.” ~ Dennis Waitley`,
    `“You can’t be that kid standing at the top of the waterslide, overthinking it. You have to go down the chute.” —Tina Fey`,
    `“Amateurs sit and wait for inspiration, the rest of us just get up and go to work.” ~ Stephen King`,
    `“It always seems impossible until it’s done.” —Nelson Mandela`,
    `Push yourself, because no one else is going to do it for you.`,
    `Sometimes later becomes never. Do it now.`,
    `“Your mind is for having ideas, not holding them.” —David Allen`,
    `“If you spend too much time thinking about a thing, you’ll never get it done.” ~ Bruce Lee`,
    `“Absorb what is useful, reject what is useless, add what is specifically your own.” ~ Bruce Lee`,
    `“I feel that luck is preparation meeting opportunity.” ~ Oprah Winfrey`,
    `Great things never come from comfort zones.`,
    `“By failing to prepare, you are preparing to fail.” ~ Benjamin Franklin`,
    `“It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.” ~ Charles Darwin`,
    `“My goal is no longer to get more done, but rather to have less to do.” ~ Francine Jay`,
    `“You see, in life, lots of people know what to do, but few people actually do what they know. Knowing is not enough! You must take action.” —Tony Robbins`,
    `“Live daringly, boldly, fearlessly. Taste the relish to be found in competition – in having put forth the best within you.” ~ Henry J. Kaiser`,
    `Start by doing what’s necessary; then do what’s possible; and suddenly you are doing the impossible. – Francis Of Assisi`,
    `The way to get started is to quit talking and begin doing. – Walt Disney`,
    `It’s not that I’m so smart, it’s just that I stay with problems longer. – Albert Einstein`,
    `Sometimes, things may not go your way, but the effort should be there every single night. – Michael Jordan`,
    `“If passion drives you, let reason hold the reins.”– Benjamin Franklin`,
    `“The greater the obstacle, the more glory in overcoming it.”– Jean-Baptiste Poqeulin (Moliere)`,
    `“You miss 100% of the shots you don’t take.”– Wayne Gretzky`,
    `“Procrastination is opportunity’s assassin.” —Victor Kiam`];

let quote = document.querySelector(".quote");
let randomQuote = () => {
    quote.textContent = quotesArr[Math.floor(Math.random() * quotesArr.length)];
};

randomQuote();