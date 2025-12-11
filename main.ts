basic.forever(function () {
    basic.showIcon(IconNames.Tortoise)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        # # # # #
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.Tortoise)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # # # # #
        . # . # .
        `)
    basic.pause(500)
})
