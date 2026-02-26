export function homeGsap() {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: 'play none none none'
        }
    })

    tl.from('.container', {
        y: -40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }) 
}