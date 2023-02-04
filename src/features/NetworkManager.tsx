import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDispatchSystemsAction } from '../redux/NetworkDispatch/NetworkDispatch';
import * as zmq from 'jszmq';
import { ISocketMessageReceivable, ISocketMessageTransmittable } from '../Models/Interfaces';
import { ControllerTypes } from '../Models/Enums';
import {
    IBatteryControllerReceivable,
    IClimateControllerReceivable,
    IMotorControllerReceivable,
} from '../Models/Controllers';

const NetworkManager: React.FC = () => {
    const sock = new zmq.Dealer();

    const dispatch = useDispatch();

    const handleSystemsDispatch = (message: ISocketMessageTransmittable) => {
        sock.send(Buffer.from(JSON.stringify(message)));
    };

    const handleIncomingMessage = (message: ISocketMessageReceivable) => {
        switch (message.controller) {
            case ControllerTypes.BatteryController:
                console.log(ControllerTypes.BatteryController, message.data as IBatteryControllerReceivable);
                break;

            case ControllerTypes.MotorController:
                console.log(ControllerTypes.MotorController, message.data as IMotorControllerReceivable);
                break;

            case ControllerTypes.ClimateController:
                console.log(ControllerTypes.ClimateController, message.data as IClimateControllerReceivable);
                break;

            default:
                console.warn(`Unknown Controller Type: ${message.controller}`, message);
                break;
        }
    };

    useEffect(() => {
        // Connect to websocket port 8001
        sock.connect('ws://localhost:8001');

        sock.on('message', (message: Buffer) => {
            // FIXME: wrap in a try-catch since it's possible for JSON.parse to throw an exception
            try {
                const json = JSON.parse(message.toString());
                console.log(json);
                handleIncomingMessage(json as ISocketMessageReceivable);
            } catch (e) {
                console.warn('Sadness');
            }
        });

        // Register socket dispatch action
        dispatch(setDispatchSystemsAction(handleSystemsDispatch));
    }, []);

    return <></>;
};

export default NetworkManager;
