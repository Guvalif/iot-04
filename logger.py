from microbit import *
from time import sleep

while True:
    print('{{ "time": {}, "x": {}, "y": {}, "z": {} }}'.format(
        running_time(),
        *accelerometer.get_values()
    ))
    sleep(1)
