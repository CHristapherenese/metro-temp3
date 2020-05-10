let Temp3 = 0
pins.LED.digitalWrite(false)
let _7seg = 88
pins.i2cWriteNumber(
113,
_7seg,
NumberFormat.UInt16LE,
true
)
console.logValue("x", _7seg)
forever(function () {
    if (true) {
        for (let index = 0; index < 3; index++) {
            Temp3 = 1
            pause(1000)
            Temp3 = 0
            pause(1000)
        }
    }
    pause(5000)
})
forever(function () {
    if (Temp3) {
        pins.LED.digitalWrite(true)
        pixel.setColor(0xff0000)
    } else {
        pins.LED.digitalWrite(false)
        pixel.setColor(0x000000)
    }
})
