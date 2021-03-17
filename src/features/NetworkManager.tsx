import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDispatchSystemsAction } from '../redux/NetworkDispatch/NetworkDispatch';
import * as zmq from 'jszmq';
import { ISocketMessageReceivable } from '../Models/Interfaces';
import { ControllerTypes } from '../Models/Enums';
import { IBatteryController, IClimateController, IMotorController } from '../Models/Controllers';

const NetworkManager: React.FC = () => {
    const req = new zmq.Dealer();

    const dispatch = useDispatch();

    const handleSystemsDispatch = (message: string) => {
        req.send(message);
    };

    const handleIncomingMessage = (message: ISocketMessageReceivable) => {
        switch (message.controller) {
            case ControllerTypes.BatteryController:
                console.log(ControllerTypes.BatteryController, message.data as IBatteryController);
                break;

            case ControllerTypes.MotorController:
                console.log(ControllerTypes.MotorController, message.data as IMotorController);
                break;

            case ControllerTypes.ClimateController:
                console.log(ControllerTypes.ClimateController, message.data as IClimateController);
                break;

            default:
                console.warn(`Unknown Controller Type: ${message.controller}`);
                break;
        }
    };

    useEffect(() => {
        // Connect to websocket port 8001
        req.connect('ws://localhost:8001');

        req.on('message', (message: Buffer) => {
            // FIXME: wrap in a try-catch since it's possible for JSON.parse to throw an exception
            const json = JSON.parse(message.toString());
            handleIncomingMessage(json as ISocketMessageReceivable);
        });

        // Register socket dispatch action
        dispatch(setDispatchSystemsAction(handleSystemsDispatch));
    }, []);

    return <></>;
};

export default NetworkManager;
