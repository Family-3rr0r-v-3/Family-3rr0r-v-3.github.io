
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

        const title = add([
            text('TUTORIAL', {
                font: 'kfuture',
                size: 45
            }),
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
            pos(0, 0),
        ]);
        guideTextA.pos.x = (width()/2) - (guideTextA.width/2);
        guideTextA.pos.y = height() - (guideTextA.height + 25);

        onKeyPress("space", () => {
            go('colorSelector', {
                cursor: c,
            })
        })        

    });

}

export default tutorial;