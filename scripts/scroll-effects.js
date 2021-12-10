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
                ["elInY", "elCenterY", "elOutY"],
                ['-screenWidth/2', 0, 'screenWidth/2'],
            ],
            opacity: [
                ["elInY+150", "elCenterY-100", "elCenterY+100", "elOutY-150"],
                [0, 1, 1, 0]
            ],
        }
    });

}