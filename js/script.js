//Model
const spill = document.getElementById('app');
let currentCardFolder = null;


//viewer
showView()
function showView() {
    spill.innerHTML = /*html*/ `
    <div class="game"> 
        <div class="board" id="board">
            
        </div> 
        <div class="knapper">
            <button class="knapp" onclick=getCards(20)>Spill 1</button>
            <button class="knapp" onclick=getCards()>Spill 2</button>
            <button class="knapp" onclick=getCards()>Spill 2</button>
        </div>      
    </div>
    `;
}


//Controller
function getCards(times, cardFolder) {
    currentCardFolder = cardFolder;
    cards = [];

    document.getElementById('board').innerHTML += /*html*/ `
                <div class="card">
                her er det kort
                </div>    
    `;

}