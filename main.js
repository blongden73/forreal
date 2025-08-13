let config = { type: "carousel", perTouch: 1, peek: 0 };
let slider = new Glide(".glide", config);

slider.mount();

slider.on("run.before", () => {
let slides = gsap.utils.toArray(".glide__slide");
let tl = new gsap.timeline();

tl.to(slides, { opacity: 1, ease: "none" });
});

slider.on("move.after", () => {
let tl = new gsap.timeline();
});
  