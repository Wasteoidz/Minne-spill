//Model
const spill = document.getElementById('app');
let firstCard = null;
let secondCard = null;
let lockBoard = false;


//viewer
showView()
function showView() {
    spill.innerHTML = /*html*/ `
    <div class="game"> 
        <div class="board" id="board">
            <h1 class="tempText" id="tempText">⁉️Kan du finne alle like⁉️</h1>
            <div id="knapper" class="knapperStart">
                <button class="knapp" onclick="getCards(40, decks.spill1)">🌈Gabby😻</button>
                <button class="knapp" onclick="getCards(40, decks.spill2)">Spill 2</button>
                <button class="knapp" onclick="getCards(2, decks.test)">test</button>
            </div>      
        </div> 
    </div>
    `;
}


//Controller
function getCards(times, cardSet) {
    showView();
    document.getElementById('tempText').style.display = "none";
    document.getElementById('knapper').style.display = "none";
    const shuffled = shuffle([...cardSet]);
    for (let i = 0; i<times; i++) {
        const card = shuffled[i];
        document.getElementById('board').innerHTML += /*html*/ `
            <div class="card" data-value="${card.id}" onclick="showCard(this)">
                    <div class="card-front">❓</div> 
                    <div class="card-back">
                        <img src="${card.img}" 
                        alt="${card.id}" 
                        style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
            </div>`;
    }
}

function showCard(kort) {
    if (lockBoard) return;
    if (kort === firstCard) return;

    kort.classList.add("flipped");

    if (!firstCard) {
        firstCard = kort;
        return;
    }   secondCard = kort ;
        if (firstCard.dataset.value === secondCard.dataset.value) {
            firstCard = null;
            secondCard = null;
            checkWin();
        } else {
            lockBoard = true;
            setTimeout(() => {
                firstCard.classList.remove("flipped");
                secondCard.classList.remove("flipped");
                firstCard = null;
                secondCard = null;
                lockBoard = false;
            }, 1000);
        }
}


function checkWin() {
    const allCards = document.querySelectorAll(".card");
    const allFlipped = Array.from(allCards).every(card => card.classList.contains("flipped"));

    if (allFlipped) {
        setTimeout (() => {
        document.getElementById('board').innerHTML = `<h1 class="vinnerText">💜Du Har vunnet!💜</h1> </br>
                                                      <h3 class="spillIgjen">Vil du prøve et annet spill?</h3>
                                                       <div class="knapperVinn">
                                                        <button class="knapp" onclick="getCards(40, decks.spill1)">🌈Gabby😻</button>
                                                        <button class="knapp" onclick="getCards(40, decks.spill2)">Spill 2</button>
                                                        <button class="knapp" onclick="getCards(2, decks.test)">Test</button>
                                                       </div>
                                                     `;
        }, 800);
    }
}
// Fisher–Yates shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

