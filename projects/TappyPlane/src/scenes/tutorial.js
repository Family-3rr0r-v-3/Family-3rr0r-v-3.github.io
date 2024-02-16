import button from "../objects/button.js";

function tutorial(){

    scene('tutorial', (options = {
        cursor,
    }) => {

        //* Dibujado del titulo de la ventana

        const spriteID = isTouchscreen() ? 'mobile_tutorial' : 'pc_tutorial';
        const textToShow = isTouchscreen() ? 'Toque la pantalla para elevar la avioneta' : 'Presione la pantalla para elevar la avioneta';

        const c = add(options.cursor);
        onUpdate(() => {
            c.pos = mousePos();
        });

        let bgx1 = 0; //? Posicion en x del primer sprite de fondo
		let bgx2 = 800; //? Posicion en x del segundo sprite de fondo

		onUpdate(() => {
			//* Actualizamos la posicion del fondo siemnpre y cuando el juego no este pausado
			bgx1 -= 2;
			bgx2 -= 2;

			//* Reposicionamos los sprites de fondo cuando salen de la pantalla
			if(bgx1 <= -800){
				bgx1 = 800;
			}
			if(bgx2 <= -800){
				bgx2 = 800;
			}
		});

		onDraw(() => {
			//* Se dibujan los sprites de fondo, uno siempre sigue al otro para crear el efecto de parallax
			//! primer dibujado
			drawSprite({
				sprite: 'background',
				width: 800,
				height: 480,
				pos: vec2(bgx1, 0),
			});

			//! segundo dibujado
			drawSprite({
				sprite: 'background',
				width: 800,
				height: 480,
				pos: vec2(bgx2, 0),
			});
		});

        const title = add([
            text('TUTORIAL', {
                font: 'kfuture',
                size: 45
            }),
            color(0,0,0),
            pos(),
        ]);
        title.pos.x = (width()/2) - (title.width/2);

        const guide = add([
            sprite(spriteID, {
                anim: 'idle'
            }),
            pos(100, 100),
        ]);
        guide.pos.x = (width()/2) - (189/2);
        guide.pos.y = isTouchscreen() ? (height()/2) - (137/2) : (height()/2) - (152/2);

        const guideTextA = add([
            text(textToShow, {
                font: 'kfuture',
                size: 22
            }),
            color(0, 0, 0),
            pos(0, 0),
        ]);
        guideTextA.pos.x = (width()/2) - (guideTextA.width/2);
        guideTextA.pos.y = height() - (guideTextA.height + 160);

        const continueBtn = button({
            btnText: 'continue',
            btnTextSize: 16,
            onClickEvent: () => {
                go('colorSelector', {
                    cursor: c,
                })
            }
        });
        continueBtn.pos.x = (width()/2) - (196/2);
        continueBtn.pos.y = height() - 90;

        onKeyPress("space", () => {
            go('colorSelector', {
                cursor: c,
            })
        })        

    });

}

export default tutorial;