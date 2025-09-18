//Model
const spill = document.getElementById('app');
const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];



//viewer
showView()
function showView() {
    spill.innerHTML = /*html*/ `
    <div class="game"> 
        <div class="board" id="board">
            <h1 class="tempText" id="tempText">⁉️Kan du finne alle like⁉️</h1>
        </div> 
        <div class="knapper">
            <button class="knapp" onclick=getCards(40)>Spill 1</button>
            <button class="knapp" onclick=getCards(40)>Spill 2</button>
            <button class="knapp" onclick=getCards(40)>Spill 2</button>
        </div>      
    </div>
    `;
}


//Controller
function getCards(times) {
    showView();
    document.getElementById('tempText').style.display = "none";
     const shuffled = shuffle([...cards]);
    for (let i = 0; i<times; i++) {
    document.getElementById('board').innerHTML += /*html*/ `
                <div class="card" onclick="showCard()">
                her er det kort ${shuffled[i]}
                </div>`;
    }
}

function showCard() { //viser kort med onclick-og sjekker om det er likt forrige kort
    
}

// Fisher–Yates shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}