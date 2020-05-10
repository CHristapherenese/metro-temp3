Temp3 = 0
pins.LED.digital_write(False)
pins.i2c_write_number(113, 252, NumberFormat.UINT16_LE, True)
def on_forever():
    global Temp3
    if True:
        for index in range(3):
            Temp3 = 1
            pause(1000)
            Temp3 = 0
            pause(1000)
    pause(5000)
forever(on_forever)
def on_forever2():
    if Temp3:
        pins.LED.digital_write(True)
        pixel.set_color(0xff0000)
    else:
        pins.LED.digital_write(False)
        pixel.set_color(0x000000)
forever(on_forever2)