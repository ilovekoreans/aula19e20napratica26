input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
let leiturasolo = 0
basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.forever(function () {
    leiturasolo = pins.analogReadPin(AnalogPin.P1)
    if (leiturasolo > 1000) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(2000)
    } else if (leiturasolo > 650) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(2000)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.pause(2000)
    }
})
