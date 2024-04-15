var tl = gsap.timeline()


tl.from("#nav img, #nav-center h4, #nav-last h4, #nav-last button",{
    y : -50,
    // duration : 1,
    opacity : 0,
    // delay : 0.2,
    stagger : 0.1
})

tl.from("#main h1",{
    y : 300,
    opacity : 0,
    // duration : 1,
    stagger : 0.2
})

tl.from("#main>img",{
    opacity:0,
    scale : 0,
    stagger:0.2
})