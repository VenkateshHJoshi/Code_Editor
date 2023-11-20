let tl = gsap.timeline();
tl.from(".main .left label , .right label",{
  scale:0,
  opacity:0,
  x:-200,
  duration:0.5,
  stagger:0.5
})
tl.from(".main .left textarea , .right iframe",{
  scale:0,
  opacity:0,
  y:200,
  stagger:0.5,
  duration:0.5
})