window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.project', {
        scrollY: {
            translateX: [
                ["elInY", "elInY+500", "elOutY-500", "elOutY"],
                [-100, 0, 0, 100],
            ]
        }
    })
}