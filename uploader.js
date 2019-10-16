const { from, fromEvent } = require('rxjs');
const { map, flatMap } = require('rxjs/operators');
const axios = require('axios');
const SerialPort = require('serialport');
const ReadLine = require('@serialport/parser-readline')


const REALTIME_DATABASE_URL = '<BASEURL>/data.json';


function connectDevicePromise()
{
    return SerialPort.list()
        .then((ports) =>
        {
            if (ports.length > 0)
            {
                const id = ports.findIndex(x => x.manufacturer === 'mbed');
                const serial = new SerialPort(ports[id].comName, { baudRate: 115200 }, e => {});
                const parser = serial.pipe(new ReadLine({ delimiter: '\n' }));

                return Promise.resolve(parser);
            }
            else
            {
                return Promise.reject(new Error('No such micro:bit connected with your PC'));
            }
        });
};

from(connectDevicePromise())
    .pipe(
        flatMap(x => fromEvent(x, 'data')),
        map(x => JSON.parse(String(x))),
        flatMap(x => axios.post(REALTIME_DATABASE_URL, x))
    )
    .subscribe(
        x => {},
        e => console.log(e)
    );
