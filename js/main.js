const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');

class Unit {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.baseMelee = 1;
    this.numberOwned = 0;
  }
}
let swordsman = new Unit('swordsman', 'military');
let archer = new Unit('archer', 'military');
let horseman = new Unit('horseman', 'military');

const military = ['swordsman','archer','catapult'];
const academics = ['scribe','monk','researcher','librarian','scientist', 'AI'];

const snd = new Audio("sounds/zapsplat_leisure_board_game_telstrations_game_card_remove_slide_out_from_pile_stack_001_52290.wav"); // buffers automatically when created


numSwordsman = 0;
numArcher = 0;
numCatapult = 0;

function addMilitary() {
  const column = document.createElement('div');
  column.classList.add('military-column');
  column.innerHTML = 'This is a placeholder for mil units.';
  game.append(column);
  military.forEach(unit => {
    const militaryCard = document.createElement('div');
    militaryCard.classList.add('military-card');
    militaryCard.innerHTML = unit;
    militaryCard.setAttribute(`unitType`, unit);
    column.append(militaryCard);
    //militaryCard.addEventListener('click',buyUnit);
    militaryCard.addEventListener("click", function() {
      buyUnit(unit);
    });
    // militaryCard.addEventListener('mouseover', this.className='hover');
    militaryCard.addEventListener('mouseover', addHover);
    militaryCard.addEventListener('mouseout', removeHover);

  })
}

function buyUnit(unit){
  console.log('Clicked.' + unit);
  if (unit === 'swordsman') {
    numSwordsman += 1;
    this.innerHTML = unit + ': ' + numSwordsman;
  }
  if (unit === 'archer') { numArcher += 1; }
  if (unit === 'catapult') { numCatapult += 1; }
  console.log('Swordsmen: ' + numSwordsman + ' Archers: ' + numArcher + ' Catapults: ' + numCatapult);

}
function addHover(){
  this.classList.add('hover');
  snd.currentTime=100;
  snd.play();
}
function removeHover(){
  this.classList.remove('hover');


}

addMilitary();
