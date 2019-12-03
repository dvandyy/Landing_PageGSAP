const tl = new TimelineMax();
const tl2 = new TimelineMax();
const tl3 = new TimelineMax({ onUpdate: updatePercentage }); //Timeline on scroll update
const tl4 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from("#color", 0.6, { opacity: 0 }, 0.3)
  .from("#line", 0.6, { height: 1 })
  .from("#first-title", 0.6, { opacity: 0, x: 20 })
  .from("#second-title", 0.6, { opacity: 0, x: -20 })
  .from("#I", 0.6, { opacity: 0 })
  .from("#wanna", 0.6, { opacity: 0 })
  .from("#let", 0.6, { opacity: 0 })
  .from(".i", 0.6, { opacity: 0 });

tl2.from("#people", 1, { opacity: 0 }, 0.7);

tl3
  .to("#one", 0.5, { opacity: 1 })
  .to("#two", 0.5, { opacity: 1 })
  .to("#three", 0.5, { opacity: 1 });

tl4
  .to("#first-pic", 0.5, { x: -30, opacity: 1 })
  .to("#second-pic", 0.5, { y: 30, opacity: 1 })
  .to("#third-pic", 0.5, { x: 30, opacity: 1 });

const scene3 = new ScrollMagic.Scene({
  triggerElement: ".showcase",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".showcase")
  .setTween(tl4)
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".men",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".men")
  .setTween(tl3)
  .addTo(controller);

const scene = new ScrollMagic.Scene({
  triggerElement: ".main"
})
  .setTween(tl2)
  .addTo(controller);

// Update on scrolling function
function updatePercentage() {
  tl3.progress();
}
