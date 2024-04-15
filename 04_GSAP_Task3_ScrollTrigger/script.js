var tl = gsap.timeline()


tl.from("#nav",{
    opacity : 0,
    duration : 0.3,
    delay : 0.4
})

tl.from("#nav h1, #nav h3",{
    y : -100,
    opacity : 0,
    duration : 0.8,
    stagger : 0.2
})

tl.from("#left h1",{
    x : 400,
    opacity : 0,
    duration : 0.8,
    stagger : 0.3
})

tl.from("#left #abc img",{
    x : 400,
    opacity:0,
    duration :0.9,
    stagger : 0.3
})

tl.from("#right img",{
    scale : 0.5,
    opacity : 0
})

tl.from(".right-h1",{
    opacity : 0,
    duration : 0.2
})

gsap.from("#main-container #box1, #main-container .box",{
    opacity : 0,
    duration : 1,
    // delay : 2,
    stagger : 0.3,
    scale : 0,
    rotate : 100,
    scrollTrigger : {
        trigger : "#main-container #box1, #main-container .box",
        scroller : "body"
    }
})