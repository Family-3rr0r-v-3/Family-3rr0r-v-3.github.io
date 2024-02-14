//* Importamos la libreria desde la url
import kaboom from 'https://unpkg.com/kaboom@3000.1.17/dist/kaboom.mjs';

const w = screen.width;
const h = screen.height;

let scale = 1.0;

console.log(w, h);

switch(screen.orientation.type){
    case 'landscape-primary':
        if(h <= 400) {
            console.log('landscape primary');
            scale = 0.7;
        }else if(w >= 720){
            scale = 0.7;
        }
        break;
    case 'landscape-secondary':
        console.log('landscape secondary');
        break;
    case 'portrait-primary':
        if(w <= 400) {
            console.log('reducir escala en vertical');
            scale = 0.5;
        }else if(w >= 720){
            scale = 0.5;
        }
        break;
    default:
        break;
}

//* Creamos el objeto Kaboom y le asignamos las propiedades
//? Utilizaremos Kaboom de forma global, por lo tanto, no es necesario colocar la propiedad 'global'
const k = kaboom({
    width: 800, //? Ancho del canvas
    height: 480, //? Alto del canvas
    canvas: document.querySelector('#game'), //* Referencia al canvas del documento HTML
    background: [218, 239, 247], //? Color de fondo de la ventana
    debug: true,
    scale: scale
});
debug.inspect = false;
audioCtx = new AudioContext();

//* Establecemeos la ruta principal de los recursos
loadRoot('resources/');
//* Ocultamos el cursor para poder dibujar nuestro cursor
setCursor('none');

//! exportamos le objeto Kaboom (k)
export default k;