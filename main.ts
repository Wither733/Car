function right () {
    pins.analogWritePin(AnalogPin.P1, 700)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P2, 700)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function back () {
    pins.analogWritePin(AnalogPin.P1, 700)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P2, 700)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function left () {
    pins.analogWritePin(AnalogPin.P1, 700)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P2, 700)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function stop () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function nitro () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        forward()
    } else if (receivedString == "back") {
        back()
    } else if (receivedString == "left") {
        left()
    } else if (receivedString == "right") {
        right()
    } else if (receivedString == "stop") {
        stop()
    } else if (receivedString == "nitro") {
        nitro()
    }
})
function forward () {
    pins.analogWritePin(AnalogPin.P1, 700)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P2, 700)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
pins.digitalWritePin(DigitalPin.P14, 20)
radio.setGroup(20)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
