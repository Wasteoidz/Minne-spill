//Model
const spill = document.getElementById('app');
const decks = {
    tall: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20],
    spill1: [],
    spill2: [],
}


//viewer
showView()
function showView() {
    spill.innerHTML = /*html*/ `
    <div class="game"> 
        <div class="board" id="board">
            <h1 class="tempText" id="tempText">⁉️Kan du finne alle like⁉️</h1>
        </div> 
        <div class="knapper">
            <button class="knapp" onclick=getCards(40, decks.tall)>Spill 1</button>
            <button class="knapp" onclick=getCards(40)>Spill 2</button>
            <button class="knapp" onclick=getCards(40)>Spill 2</button>
        </div>      
    </div>
    `;
}


//Controller
function getCards(times, cardset) {
    showView();
    document.getElementById('tempText').style.display = "none";
    const shuffled = shuffle([...cardset]);
    for (let i = 0; i<times; i++) {
        document.getElementById('board').innerHTML += /*html*/ `
            <div class="card" data-value="${shuffled[i]}" onclick="showCard(this)">
                    <div class="card-front">❓</div> 
                    <div class="card-back">${shuffled[i]}</div>
            </div>`;
    }
}

function showCard(kort) {
    kort.classList.toggle("flipped");
    console.log("Valgt kort:", kort.dataset.value);
}

// Fisher–Yates shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}