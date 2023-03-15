import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("background","kartka_swiatecna.png")
loadSprite("star","gwiazda2.png")
loadSound("music", "DoSzopyHejPasterze.mp3")

// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);

add([
    sprite("background"),
    pos(0,0)
])
const star = add([
    sprite("star"),
    pos(533,45),
    rotate(1)
])

var xMinus = 1;
onUpdate(()=>{
    if(star.pos.x == 400)
    {
        xMinus = 1;
    }
    if(star.pos.x == 633)
    {
        xMinus = -1;    
    }
    star.pos.x += xMinus
})

onKeyRelease("space",()=>play("music"))
