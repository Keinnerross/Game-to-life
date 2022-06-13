let canvas;
let ctx;
let fps = 30;

let canvasX = 500;  
let canvasY = 500;

let tileX, tileY;

//variables tablero
let tablero;
let filas = 100;
let columnas = 100;

let blanco = '#ffffff';
let negro = '#000000f';


function inicializa(){
    canvas = document.querySelector('.app');
    ctx = canvas.getContext('2D');
    canvas.width = canvasX;
    canvas.height = canvasY;

    //calculator 

    tileX = Math.floor(canvasX/filas);
    tileY = Math.floor(canvasY/columnas);
    
}