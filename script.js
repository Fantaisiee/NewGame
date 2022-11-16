let dropdown = document.getElementById('select-animations');
let playerState = 'idle';
dropdown.addEventListener('change',e=>{
    playerState = e.target.value;
});

const canvas = document.getElementById('canvas1');
const c = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT= canvas.height = 600;

const playerImg = new Image();
playerImg.onload = function(){};
playerImg.src = '/img/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let x = 0;
let y = 0;

const srpiteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'jump',
        frames: 7
    },
    {
        name: 'fall',
        frames: 7
    },{
        name: 'run',
        frames: 9
    },{
        name: 'dizzy',
        frames: 11
    },{
        name: 'sit',
        frames: 5
    },{
        name: 'roll',
        frames: 7
    },{
        name: 'bite',
        frames: 7
    },{
        name: 'ko',
        frames: 12
    },{
        name: 'getHit',
        frames: 4
    }
    
];
animationStates.forEach((e,index)=>{
    let frames = {
        loc: [],
    }
    for(let i =0; i < e.frames; i++){
        let posX = i * spriteWidth;
        let posY = index * spriteHeight;
        frames.loc.push({x: posX,y: posY});
    }
    srpiteAnimations[e.name] = frames;
}); 
console.log(srpiteAnimations);

let gameFrame =0;
let staggerFrame = 5;

function Animate(){
    c.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT); 
    let pos = Math.floor(gameFrame/ staggerFrame) % srpiteAnimations[playerState].loc.length;
    let frameX = spriteWidth * pos ;
    let frameY = srpiteAnimations[playerState].loc[pos].y;
    c.drawImage(playerImg,frameX,frameY,spriteWidth,spriteHeight,0,0,CANVAS_WIDTH,CANVAS_HEIGHT);     
    
    gameFrame++;
    requestAnimationFrame(Animate);         
};

Animate();
