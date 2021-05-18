let tl = gsap.timeline({
    repeat: -1,
})


.from("circle", { duration: 8, scale: 0, y: 200 })

.to("circle", { fill: "aqua" })
    .to("circle", { fill: "blue" }, 1)
    .to("circle", { duration: 5, fill: "purple" }, 3)
    .to("circle", { duration: 2, fill: "violet" }, 5)
    .to("circle", { duration: 2, fill: "red" }, 7)
    .to("circle", { duration: 2, fill: "orangered" }, 9)
    .to("circle", { duration: 2, fill: "orange" }, 11)

.to("circle", { duration: 2, fill: "yellowgreen" }, 13)
    .to("circle", { duration: 2, fill: "green" }, 14)
    .to("circle", { duration: 2, fill: "blue" }, 15)