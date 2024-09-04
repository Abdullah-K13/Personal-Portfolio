document.addEventListener('DOMContentLoaded', function() {

     const thingsElement = document.querySelector('.things'); // Replace with the actual ID of your element
//    const things = ['develop', 'mobile apps', 'ux/ui'];
//     let currentIndex = 0;

//     function switchWord() {
//         const currentWord = words[currentIndex];
//         const randomCharacters = getRandomCharacters(currentWord.length);

//         targetWordElement.textContent = randomCharacters;
    
// setInterval(() => {
//     targetWordElement.textContent = currentWord;
//             currentIndex = (currentIndex + 1) % words.length;


//         setTimeout(() => {
            
//             setInterval(function(){
//                switchWord();
//             },100);
//         }, 3000);
//     }, 4000);
//     }
//     function getRandomCharacters(length) {
//         const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
//         let result = '';
//         for (let i = 0; i < length; i++) {
//             const randomIndex = Math.floor(Math.random() * characters.length);
//             result += characters[randomIndex];
//         }
//         return result;

//     }

//     setInterval(switchWord, 5000);

//     let bool = false;
//     let i = 0;
//     var intervalid = setInterval(function change(){
//     if(i == 4){
//         i=0;
//     }
//     thingsElement.innerHTML = things[i]; 
// i++;

       
//     },2000);
//     clearInterval(intervalid);
//     var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()/*-+";
//     var currentIndex = 0;
//     var intervalId;
//     var systemid;
//     var randomword;

//     function updateSlotMachine() {
//         var slotMachine = thingsElement;
//         randomword = characters[currentIndex];
//         slotMachine.textContent = characters[currentIndex];
//         currentIndex = getRandomInt(0,24);
//     }

//     function startSlotMachine() {
//         intervalId = setInterval(updateSlotMachine, 100);
//     }

//     function stopSlotMachine() {
//         clearInterval(intervalId);
//     }

//     // Start the slot machine when the page loads
//     startSlotMachine();

//     // Stop the slot machine after 3 seconds (adjust as needed)
//     setTimeout(stopSlotMachine, 3000);

//     function generateRandomNumbers() {
//         var randomNumbers = [];
//         for (var i = 0; i < 6; i++) {
//             randomNumbers.push(getRandomInt(1, 10)); // Adjust the range as needed
//         }
//         return randomNumbers;
//     }
    
//     function getRandomInt(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     var sixRandomNumbers = generateRandomNumbers();
// console.log(sixRandomNumbers);
    

const letters = 'abcdefghijklmnopqrstuvwxyz';
const words = ['develop', 'things'];
const interval = 100; // in milliseconds

function generateRandomLetter() {
  return letters[Math.floor(Math.random() * letters.length)];
}

function generateWord(word) {
  let output = '';
  for (let i = 0; i < word.length; i++) {
    output += generateRandomLetter();
  }
  return output;
}

function displayWord(word, delay) {
  setTimeout(() => {
    console.log(word);
    if (word !== words[words.length - 1]) {
      displayWord(generateWord(word), interval);
    }
  }, delay);
}

console.log(generateWord(words[0]));
displayWord(words[0], interval);


window.onscroll = function() {
    updateNavbarPosition();
};

function updateNavbarPosition() {
    console.log('testing functions');
    var navbar = document.querySelector('.navbar');
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-50px';
    }
}


});
function jumpToSection(sectionClass) {
    if (sectionClass === "#section-about-link") {
        const section = document.querySelector("#section-about");
        section.scrollIntoView({ behavior: 'smooth' });
    } 
    else {
        const section = document.querySelector(sectionClass);
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
