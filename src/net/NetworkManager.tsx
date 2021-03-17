import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTemperature, selectTemperature } from '../redux/AuxillarySensors/AuxillarySensors';
import { setDispatchSystemsAction } from '../redux/NetworkDispatch/NetworkDispatch';
import * as zmq from 'jszmq';

const NetworkManager: React.FC = () => {
    const req = new zmq.Dealer();

    const temperature: number = useSelector(selectTemperature);
    const dispatch = useDispatch();

    const handleSystemsDispatch = (message: string) => {
        req.send(message);
    };

    useEffect(() => {
        req.connect('ws://localhost:8001');
        req.on('message', (message: Buffer) => {
            const json = JSON.parse(message.toString());
            console.log('Got message from systems:', json);
            dispatch(setTemperature(json.temp));
        });
        dispatch(setDispatchSystemsAction(handleSystemsDispatch));
    }, []);

    return <></>;
};

export default NetworkManager;
