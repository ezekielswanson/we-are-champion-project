
//Importing app
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://we-are-the-champions-app-default-rtdb.firebaseio.com/"
}


const app = initializeApp(appSettings)
const database = getDatabase(app)
const endoresementlistInDB = ref(database, "endorsementList")


//Variables
const endoresemntInput = document.getElementById('endorsement-input');
const fromInput = document.getElementById('from-name');
const toInput = document.getElementById('to-name');
const sumbitBtn = document.getElementById('submit-btn');
const endoresemntContainer = document.querySelector('.endorsements-display__list-container');



//Getting input values and pushing into database 
sumbitBtn.addEventListener('click', function() {
    let endorseVal = endoresemntInput.value;
    let fromVal = fromInput.value;
    let toVal =  toInput.value;

    let dataToPush = {
        endorsement: endorseVal,
        from: fromVal,
        to: toVal
    }
    push(endoresementlistInDB, dataToPush);
    createEndorsementEl(dataToPush);
    
})




//Create endorsement div elemenet
function createEndorsementEl(dataToPush) {
    let endorsementDiv = document.createElement('div')
    endorsementDiv.classList.add('endorsements-display__list-desc')
    endorsementDiv.innerHTML = `
    <span>To ${dataToPush.from}</span>
    <p>${dataToPush.endorsement}</p>
    <span>${dataToPush.to}</span>
    `
    endoresemntContainer.appendChild(endorsementDiv);
    console.log('works');

}


