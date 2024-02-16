
function tutorial(){

    screen('tutorial', (options = {
        cursor,
    }) => {

        //* Dibujado del titulo de la ventana
        const title = 'TUTORIAL';

        const spriteID = isTouchscreen() ? 'mobile_tutorial' : 'pc_tutorial';
        const textToShow = isTouchscreen() ? 'Toque la pantalla para elevar la avioneta' : 'Presione la pantalla para elevar la avioneta';

        const c = add(cursor);
        onUpdate(() => {
            c.pos = mousePos();
        });

        const guide = add([
            sprite(spriteID, {
                anim: 'idle'
            }),
            pos(100, 100),
        ]);

        const guideTextA = add([
            text(textToShow, {
                font: 'kfuture',
                size: 32
            }),
            pos(0, 0),
        ]);

        onKeyPress("space", () => {
            go('colorSelector', {
                cursor: c,
            })
        })        

    });

}

export default tutorial;