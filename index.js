

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://we-are-the-champions-app-default-rtdb.firebaseio.com/"
}


const app = initializeApp(appSettings)
const database = getDatabase(app)
const endoresementlistInDB = ref(database, "endorsementList")



const endoresemntInput = document.getElementById('endorsement-input');
const fromInput = document.getElementById('from-name');
const toInput = document.getElementById('to-name');
const sumbitBtn = document.getElementById('submit-btn');


sumbitBtn.addEventListener('click', function() {
    let endorseVal = endoresemntInput.value;
    let fromVal = fromInput.value;
    let toVal =  toInput.value;

    let dataToPush = {
        endorsement: 'endorseVal',
        from: 'fromVal',
        to: 'toVal'
    }

    push(endoresementlistInDB, dataToPush)
    console.log(endorseVal)
    
})

function createEndorsementEl() {
    
}