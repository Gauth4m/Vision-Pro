const home = document.querySelector(".home");
const video = home.querySelector("video");
const h1Text = home.querySelector("h1");
const h2Text = home.querySelector("h2");
const paragraph = document.querySelector(".home p"); 

const section = document.querySelector("section");
const end = section.querySelector("h1");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 1500,
    triggerElement: home,
    triggerHook: 0
})
.addIndicators({ name: "home-indicator" })
.setPin(home)
.addTo(controller);

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = scrollpos;
}, 3.33);


const paragraphScene = new ScrollMagic.Scene({
    triggerElement: ".home",
    triggerHook: 0.5,
    reverse: true
})
.addTo(controller)
.on("enter", () => {
    const timeline = new TimelineMax();
    timeline.fromTo(paragraph, 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
})
.on("progress", e => {
    const newPosition = (e.progress - 20) * 600;
    paragraph.style.transform = `translateY(${newPosition}px)`;
});

