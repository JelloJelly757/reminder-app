// elements
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
const input = document.getElementById('input-field');
let scoreContainer = document.getElementById('scorecont');
let divbox = document.querySelector('.box');
let resetbutton = document.getElementById('button4');

// elements that require local storage 
let reminders = JSON.parse(localStorage.getItem('reminders')) || [];
let score = parseInt(localStorage.getItem('score')) || 0; 


scoreContainer.textContent = score;

// function that updates the divbox
function updateDivbox() {
    divbox.innerHTML = ""; 
    reminders.forEach(r => {
        if (r.score === score) {
            let newReminder = document.createElement("p");
            newReminder.classList.add("large-text");
            newReminder.textContent = r.text;
            divbox.appendChild(newReminder);
        }
    });
}


updateDivbox();

// add button event listener 
button3.addEventListener('click', () => {
    let divboxText = input.value.trim();  
    if (divboxText) {
        reminders.push({ score: score, text: divboxText });
        localStorage.setItem('reminders', JSON.stringify(reminders));

        let newReminder = document.createElement("p");
        newReminder.classList.add("large-text");
        newReminder.textContent = divboxText;
        divbox.appendChild(newReminder);
        input.value = "";
    }
});

// right button event listener 
button2.addEventListener('click', () => {
    score++;
    scoreContainer.textContent = score;  
    localStorage.setItem('score', score);
    updateDivbox();
});

// left button event listener 
button1.addEventListener('click', () => {
    if (score > 0) {
        score--;
        scoreContainer.textContent = score;  
        localStorage.setItem('score', score);
        updateDivbox();
    }
});

// reset button event listener 
resetbutton.addEventListener('click', () => {
    localStorage.removeItem('reminders')
    localStorage.removeItem('score'); 
    reminders = [];
    score = 0; 
    divbox.innerHTML = "";
    scoreContainer.textContent = score; 
    input.value = ""; 

}); 






